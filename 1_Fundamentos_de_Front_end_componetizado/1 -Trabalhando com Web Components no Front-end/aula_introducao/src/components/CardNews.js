class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    // builda os elemetos
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");
        
        const autor = document.createElement("span");
        autor.textContent = "by " + (this.getAttribute("autor") || " Annonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const paragrafo = document.createElement("p");
        paragrafo.textContent = this.getAttribute("content");
        
        cardLeft.appendChild(autor);
            cardLeft.appendChild(linkTitle);
            cardLeft.appendChild(paragrafo);
            
            
            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card__right");
            
            const imagem = document.createElement("img");
            cardRight.appendChild(imagem);
            imagem.src= this.getAttribute("photo") || "./assets/default-avatar-icon-of-social.jpg"
            imagem.alt="Teste"
            
            componentRoot.appendChild(cardLeft);
            componentRoot.appendChild(cardRight);
            
        return componentRoot;
    }

    // estiliza os elementos
    styles(){
        const style = document.createElement("style");
        style.textContent = `     
        .card{
            width: 80%;
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        #imagemSet{
            width: 170px;
            height: 170px;
            justify-content: center;
        }
        
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .card__left > a {
            margin-top: 15px;
            font-size: 35px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left > p {
            color: rgba(70 , 70, 70, 0.75);
        }
        
        .card__left > span {
            font-weight: 400;
        }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);
