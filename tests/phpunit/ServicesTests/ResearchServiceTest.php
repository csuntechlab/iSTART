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

        $researchService = new ResearchService();

        $researchFactory = factory(Research::class)->make([
            'user_id'=>"members:100010526",
            'research_id' => '10'
        ]);
        $booleanValueFromOutput = true;
        $user = ['user_id' => 'members:100010526'];

        $this->researchUtility
            ->shouldReceive('userHasResearchId')
            ->andReturn($booleanValueFromOutput);

        $outputFromResearchService = $researchService->userHasResearchId($user);
        dd($outputFromResearchService);
        $this->assertEquals($booleanValueFromOutput, $outputFromResearchService);

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

        $booleanValueFromOutput = false;
        $user = ['user_id' => 'members:100010526'];
        $data = json_decode($user['user_id'], true);
        if(isset($data)){
            $outputFromResearchService = $researchService->userHasResearchId($data);
        }else{
            $outputFromResearchService = false;
        }

        $this->assertEquals($booleanValueFromOutput, $outputFromResearchService);
    }
}
