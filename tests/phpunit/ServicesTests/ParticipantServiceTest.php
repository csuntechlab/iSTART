<?php

declare(strict_types=1);

namespace Tests\ServicesTests;
use Mockery;
use App\Contracts\ParticipantContract;
use App\Models\Participant;
use App\Services\ParticipantService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;
class ParticipantServiceTest extends TestCase
{
    use DatabaseMigrations;

    protected $participantUtility;

    public function setUp()
    {
        parent::setUp();
        $this->participantUtility = new ParticipantService();
    }

    /**
     * @test
     */
    public function userHasParticipantId_returns_true_if_user_id_exists_in_Participant()
    {

        $ParticipantFactory = factory(Participant::class)->make([
            'user_id'=>'members:100010526',
            'participant_id' => '10'
        ])->save();
        $expectedOutput = true;
        $user = ['user_id' => 'members:100010526'];

        $booleanOutput= $this->participantUtility->userHasParticipantId($user);

        $this->assertEquals($booleanOutput, $expectedOutput);

    }

    /**
     * @test
     */
    public function userHasParticipantId_returns_false_if_user_id_doesnt_exist_in_Participant()
    {

        $ParticipantService = new ParticipantService();


        $expectedOutput = false;
        $user = ['user_id' => 'members:100010526'];
        $data = json_decode($user['user_id'], true);

        $booleanOutput= $this->participantUtility->userHasParticipantId($user);

        $this->assertEquals($booleanOutput, $expectedOutput);
    }
    /**
     * @test
     */
    public function user_marked_as_good_is_added_to_participant_table(){

        $data = [ 'goodParticipants' => [
            ["email"=>"nr_liad.golan@my.csun.edu","participant_id"=>'689679',"user_id"=>"members:123456789"],
            ["email"=>"nr_brian.linggadjaja@my.csun.edu","participant_id"=>'41210',"user_id"=>"members:987654321"],
            ["email"=>"khal.drogo@my.csun.edu","participant_id"=>'7',"user_id"=>"members:101010101"]
            ]
        ];
        $this->participantUtility->addGoodParticipantsToParticipantsTable($data);

        $this->assertDatabaseHas('participant',["participant_id"=>'689679',"user_id"=>"members:123456789"]);
        $this->assertDatabaseHas('participant',["participant_id"=>'41210',"user_id"=>"members:987654321"]);
        $this->assertDatabaseHas('participant',["participant_id"=>'7',"user_id"=>"members:101010101"]);

    }

    /**
     * @test
     */
    public function user_that_exists_can_get_removed_from_the_participant_table() {
        $user = ['user_id' => '251', 'participant_id' => '10'];
        
        $ParticipantFactory = factory(Participant::class)->make($user)->save();

        $this->assertDatabaseHas('participant',$user);

        $this->participantUtility->removeUserFromParticipantsTable($user);

        $this->assertDatabaseMissing('participant',$user);
    }

    /**
     * @test
     */
    public function user_that_does_not_exist_does_not_break_remove_function() {
        $user = ['user_id' => '251', 'participant_id' => '10'];

        $this->assertDatabaseMissing('participant',$user);

        $this->participantUtility->removeUserFromParticipantsTable($user);

        $this->assertDatabaseMissing('participant',$user);
    }
}
