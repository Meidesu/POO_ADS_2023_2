"use strict";
var Postagem = /** @class */ (function () {
    function Postagem(id, texto, curtidas) {
        if (curtidas === void 0) { curtidas = 0; }
        this.id = id;
        this.texto = texto;
        this.curtidas = curtidas;
    }
    Postagem.prototype.curtir = function () {
        this.curtidas++;
    };
    Postagem.prototype.toString = function () {
        return "\n ".concat(this.texto, "\n  Likes: ").concat(this.curtidas, "\n");
    };
    return Postagem;
}());
var Blog = /** @class */ (function () {
    function Blog() {
        this.postagens = [];
    }
    Blog.prototype.postar = function (postagem) {
        this.postagens.push(postagem);
    };
    Blog.prototype.excluir = function (id) {
        var indiceProcurado = this.consultarIndice(id);
        if (indiceProcurado != -1) {
            for (var i = indiceProcurado; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    };
    Blog.prototype.consutar = function (id) {
        var postProcurado = null;
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.id == id) {
                postProcurado = post;
                break;
            }
        }
        return postProcurado;
    };
    Blog.prototype.consultarIndice = function (id) {
        var indiceProcurado = -1;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id = id) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    };
    Blog.prototype.maisCurtida = function () {
        var melhorPost = this.postagens[0];
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.curtidas >= melhorPost.curtidas) {
                melhorPost = post;
            }
        }
        return melhorPost;
    };
    Blog.prototype.curtirPostagem = function (id) {
        var post = this.consutar(id);
        if (post != null) {
            post.curtir();
        }
    };
    Blog.prototype.exibirPagina = function () {
        var texto = '';
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var post = _a[_i];
            texto += post.toString();
        }
        return texto;
    };
    return Blog;
}());
var blog = new Blog();
blog.postar(new Postagem(1, "blá blá blá", 5));
blog.postar(new Postagem(2, "labira", 7));
blog.postar(new Postagem(3, "blosonaro", 2));
blog.curtirPostagem(2);
// console.log(blog.consutar(1));
// console.log("Mais curtido:" ,blog.maisCurtida());
blog.excluir(1);
console.clear();
console.log(blog.exibirPagina());
// console.log(b.postagens);
