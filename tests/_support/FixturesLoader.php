<?php
/**
 * PHP version 5.5
 *
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
use Slim\Slim;
use Nelmio\Alice\Loader\Yaml;

class FixturesLoader
{
    /** @type \PDO */
    protected $connection;

    /**
     * Initialize the database connection using Slim's dependency injection container
     */
    public function __construct()
    {
        $app = new Slim();
        require __DIR__ . '/../../app/resources.php';

        $this->connection = $app->connection;
    }

    /**
     * This method is called, generally,  prior the execution of each of our tests.
     *
     * @param string $table
     */
    public function purge($table)
    {
        $statement = $this->connection->prepare(sprintf('DELETE FROM %s', $table));
        $statement->execute();
    }

    /**
     * @param string $fixture   Path to the fixture file
     * @param mixed  $persister Object that persists the objects loaded (it has to implement an 'add' method)
     * @param array  $providers Set of Faker data providers (optional)
     */
    public function loadFixture($fixture, $persister, $providers = [])
    {
        $loader = new Yaml('en_US', $providers);
        $entities = $loader->load($fixture);

        array_map(function($entity) use ($persister) {
            $persister->add($entity);
        }, $entities);
    }

    /**
     * @return PDO
     */
    public function connection()
    {
        return $this->connection;
    }
}
