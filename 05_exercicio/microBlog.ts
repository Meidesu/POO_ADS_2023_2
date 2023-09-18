class Postagem {
  id: number;
  texto: string;
  curtidas: number;

  constructor(id: number, texto: string, curtidas: number = 0){
    this.id = id;
    this.texto = texto;
    this.curtidas = curtidas;
  }

  curtir (): void{
    this.curtidas++
  }

  toString (): string{
    return `\n ${this.texto}
  Likes: ${this.curtidas}\n`
  }
}

class Blog {
  postagens: Postagem[] = [];

  postar (postagem: Postagem): void {
    this.postagens.push(postagem)
  }

  excluir(id: number): void {
    let indiceProcurado = this.consultarIndice(id);

    if (indiceProcurado != -1) {
      for (let i = indiceProcurado; i < this.postagens.length; i++) {
          this.postagens[i] = this.postagens[i+1];
      }
      this.postagens.pop();
        
    }
  }

  consutar (id: number): Postagem {
    let postProcurado: Postagem = null;

    for ( let post of this.postagens ){
      if ( post.id == id ){
        postProcurado = post;
        break;
      }
    }
    
    return postProcurado;
  }

  consultarIndice(id: number): number {
    let indiceProcurado: number = -1;

    for (let i: number = 0; i < this.postagens.length; i++) {
      if (this.postagens[i].id = id) {
          indiceProcurado = i;
          break;
      }
    }

    return indiceProcurado;
  }

  maisCurtida (): Postagem {
    let melhorPost: Postagem = this.postagens[0];

    for ( let post of this.postagens ){
      if ( post.curtidas >=  melhorPost.curtidas){
        melhorPost = post;
      }
    }

    return melhorPost;
  }

  curtirPostagem (id: number): void {
    let post: Postagem = this.consutar(id);

    if ( post != null ){
      post.curtir();
    }
  }

  exibirPagina (): string {
    let texto: string = '';

    for ( let post of this.postagens ){
      texto += post.toString()
      
    }

    return texto
  }
}


let b: Blog = new Blog()

b.postar(new Postagem(1, "blá blá blá", 5))
b.postar(new Postagem(2, "labira", 7))
b.postar(new Postagem(3, "blosonaro", 2))
b.curtirPostagem(2)

// console.log(b.consutar(1));
// console.log("Mais curtido:" ,b.maisCurtida());
b.excluir(1)

console.clear()
console.log(b.exibirPagina());

// console.log(b.postagens);
