<?php

namespace App\Repositories;

use App\Models\Article;

class ArticleRepository implements ArticleRepositoryInterface
{
    public function getAllArticles($perPage = 10)
    {
        return Article::latest()->paginate($perPage);
    }
    public function getArticleByKeyword(string $keyword, int $perPage = 10)
    {
       return Article::where('name', 'like', "%{$keyword}%")
            ->orWhere('content', 'like', "%{$keyword}%")
            ->latest()
            ->paginate($perPage);
    }
}
?>