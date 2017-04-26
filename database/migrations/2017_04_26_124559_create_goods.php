<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoods extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goods', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->integer('catalog_id')->unsigned()->index();
//            $table->foreign('catalog_id')->references('id')->on('catalog')->onDelete('cascade');
//            $table->foreign('catalog_id')->references('id')->on('catalog')->onUpdate('cascade');
            $table->integer('user_id')->unsigned()->index();
//            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
//            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade');
            $table->text('description');
            $table->text('text');
            $table->text('title');
            $table->text('video_link');
            $table->text('map');
            $table->float('price');
            $table->float('old_price');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('goods');
    }
}
