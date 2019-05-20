<?php

namespace Tests\Feature;

use App\Models\Participant;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use App\Jobs\RemoveParticipantFromStudy;

class ParticipantControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    use DatabaseMigrations;
    /**
     * @test
     */
    public function moduleComplete_sends_email_to_user_5_days_after_module_complete()
    {
        $data = ['user_id' => 'members:000022575'];
        factory(Participant::class)->make(['user_id' => 'members:000022575'])
            ->save();

        Queue::fake();
        RemoveParticipantFromStudy::dispatch($data);
        Queue::assertPushed(RemoveParticipantFromStudy::class);
    }

    public function test_if_user_was_deleted(){

        $data = ['user_id' => 'members:000022575'];
        factory(Participant::class)->make(['user_id' => 'members:000022575'])
            ->save();
         Participant::find($data['user_id'])->delete();
        $find_participant = Participant::find($data['user_id']);
        $this->assertNull($find_participant);
    }
}
