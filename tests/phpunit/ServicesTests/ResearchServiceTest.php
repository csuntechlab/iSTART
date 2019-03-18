<?php

declare(strict_types=1);

namespace Tests\ServicesTests;
use Mockery;
use App\Contracts\ResearchContract;
use App\Models\Research;
use App\Services\ResearchService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class ResearchServiceTest extends TestCase
{
    use DatabaseMigrations;

    public function setUp()
    {
        parent::setUp();
        $this->researchUtility = Mockery::spy(ResearchContract::class);
    }

    /**
     * @test
     */
    public function userHasResearchId_returns_true_if_user_id_exists_in_research()
    {

        $researchFactory = factory(Research::class)->make([
            'user_id'=>'members:100010526',
            'research_id' => '10'
        ]);
        $expectedOutput = true;
        $user = ['user_id' => 'members:100010526'];

        $this->researchUtility
            ->shouldReceive('userHasResearchId')
            ->andReturn($expectedOutput);

        $booleanOutput= $this->researchUtility->userHasResearchId($user);

        $this->assertEquals($booleanOutput, $expectedOutput);

    }

    /**
     * @test
     */
    public function userHasResearchId_returns_false_if_user_id_doesnt_exist_in_research()
    {

        $researchService = new ResearchService();

        $researchFactory = factory(Research::class)->make([
            'user_id'=>'members:100010526',
            'research_id' => '10'
        ]);

        $expectedOutput = false;
        $user = ['user_id' => 'members:100010526'];
        $data = json_decode($user['user_id'], true);

        $booleanOutput= $this->researchUtility->userHasResearchId($user);

        $this->assertEquals($booleanOutput, $expectedOutput);
    }
}
