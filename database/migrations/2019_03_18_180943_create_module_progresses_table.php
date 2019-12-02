<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateModuleProgressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('module_progresses', function (Blueprint $table) {
            $table->string('user_id');
            $table->string('current_module');
            $table->integer('current_page');
            $table->integer('max_page');
            $table->timestamp('expiration_date')->nullable();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('module_progresses');
    }
}
