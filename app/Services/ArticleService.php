<?php

namespace App\Services;

use App\Repositories\ArticleRepository;
use App\Repositories\ArticleRepositoryInterface;

class ArticleService
{
    protected $articleRepository;

    public function __construct(ArticleRepository $articleRepository)
    {
        $this->articleRepository = $articleRepository;
    }

    public function getAllArticles()
    {
        return $this->articleRepository->getAllArticles();
    }

    public function getArticleByKeyword(string $keyword)
    {
        //Sanitizing the keyword input
        $keyword = filter_var($keyword, FILTER_SANITIZE_STRING);
        return $this->articleRepository->getArticleByKeyword($keyword, );
    }
}

?>