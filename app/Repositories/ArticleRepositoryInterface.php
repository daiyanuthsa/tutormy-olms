<?php 

namespace App\Repositories;

interface ArticleRepositoryInterface
    {
        public function getAllArticles();

        public function getArticleByKeyword(string $keyword);
    }
?>