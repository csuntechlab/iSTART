<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddExpirationDateColumnToModuleProgressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('module_progresses', function (Blueprint $table) {
            $table->timestamp('expiration_date')->nullable()->after('max_page');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('module_progresses', function (Blueprint $table) {
            $table->dropColumn('expiration_date');
        });
    }
}
