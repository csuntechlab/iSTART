<?php

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class ExampleTest extends TestCase 
{
	use DatabaseMigrations;

	public function testResponse()
	{
		$response = $this->get('/');
		$this->assertTrue(TRUE);
	}
}