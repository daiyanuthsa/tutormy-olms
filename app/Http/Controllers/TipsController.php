<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
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
        $category = Category::all();

        return Inertia::render('Tips/Index', [
            'articles' => $articles,
            'categories' => $category->map->only( ['id', 'name']),
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

    public function tipsDetails(Article $article,)
    {
        // $jsonPath = public_path('data/articles.json');
        // $articles = collect(json_decode(file_get_contents($jsonPath), true));

        // $article = $articles->firstWhere('slug', $slug);

        // if (!$article) {
        //     abort(404, 'Artikel tidak ditemukan');
        // }
        // $article = $this->articleService->getArticleBySlug($slug);
// return $article;
       
        return inertia('Tips/Details', [
            'article' => $article,
            'writer' => $article->user->only(['id', 'name', 'status','photo']),
        ]);
    }


}
