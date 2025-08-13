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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->timestamps();
        });

        Schema::create('document_versions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('document_id')->constrained('documents')->cascadeOnDelete();
            $table->string('version_number')->unique();
            $table->string('title')->nullable(); // Title of the document version
            $table->text('content');
            $table->string('language_code')->default('id'); // Default language set to English
            $table->date('effective_date')->nullable(); // Path to the file if applicable
            $table->boolean('is_published')->default(false); // Indicates if the version is published
            $table->boolean('is_active')->default(false); // Indicates if the version is currently active
            $table->foreignId('published_by_user_id')->nullable()->constrained('users')->nullOnDelete(); // User who published the version, nullable if not published
            $table->foreignId('created_by_user_id')->nullable()->constrained('users')->nullOnDelete(); // User who created the version
            $table->timestamps();
            $table->softDeletes(); // Soft delete for version history
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('document_versions');
        Schema::dropIfExists('documents');
    }
};
