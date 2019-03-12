<?php

declare(strict_types=1);

namespace Tests\ServicesTests;

use App\Models\Research;
use App\Services\ResearchService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class ResearchServiceTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function userHasResearchId_returns_true_if_user_id_exists_in_research()
    {

        $researchService = new ResearchService();

        $researchFactory = factory(Research::class)->make([
            'user_id'=>'members:100010526',
            'research_id' => '10'
        ]);

        $data = [
            'user_id'=>'members:100010526',
            'research_id' => '10'
        ];

        $user = ['user_id' => 'members:100010526'];
        if(isset($user['user_id'])){
            $outputFromResearchService = $researchService->userHasResearchId($user['user_id']);
            $this->assertEquals($data, $outputFromUserRoleService);
        }

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

        $data = [
            'user_id'=>'members:100010526',
            'research_id' => '10'
        ];

        $user_id = ['user_id' => 'members:000021314'];
        $outputFromResearchService = $researchService->userHasResearchId(json_encode($user_id['user_id']));

        $this->assertEquals($data, $outputFromUserRoleService);
    }
}
