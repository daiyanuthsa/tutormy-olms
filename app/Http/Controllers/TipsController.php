<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Services\ArticleService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TipsController extends Controller
{
    protected $articleService;

    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }
    public function index(Request $request)
    {
  
        $articles = $this->articleService->getAllArticles();

        return Inertia::render('Tips/Index', [
            'articles' => $articles
        ]);
    }

    public function searchTips(Request $request)
    {
        $request->validate([
            'search' => 'required|string|min:3',
        ]);
        $keyword = $request->input('search');

        $articles = $this->articleService->getArticleByKeyword($keyword);

        return Inertia::render('Tips/SearchTips', [
            'articles' => $articles,
            'keyword' => $keyword
        ]);
    }

    public function tipsDetails(Article $article)
    {
        return Inertia::render('Tips/Details', [
            'article' => $article
        ]);
    }

}
