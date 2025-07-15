<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('course_certificates', function (Blueprint $table) {
            //
            $table->dateTime('send_at')->nullable()->after('path');
            $table->string('status')->default('pending')->after('send_at');
            $table->string('name_on_certificate')->nullable()->after('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('course_certificates', function (Blueprint $table) {
            //
            $table->dropColumn('send_at');
            $table->dropColumn('status');
            $table->dropColumn('name_on_certificate');
        });
    }
};
