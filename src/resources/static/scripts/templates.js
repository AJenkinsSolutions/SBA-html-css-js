
// creating a custom class We are extending HTMLElement
class myHeader extends HTMLElement{
    // means when this element is called
    connectedCallback(){
        this.innerHTML = `<header class="header-main">
        <div class="header-main-logo">
            <img src="../static/images/coding.png" alt="#">
            
        </div>
        <nav class="header-main-nav">
        <ul>
            <li><a href="index.html">Study</a></li>
            <li><a href="../views/add.html">Add</a></li>
            <li><a href="../views/qoutes.html">Qoutes</a></li>
            <li><a href="#">Todo</a></li>
        </ul>
    </nav>
        <div class="header-main-sm">
            <a href=""><div class="header-main-sm-fb"></div></a>
            <a href=""><div class="header-main-sm-in"></div></a>
        </div>
    </header>`
        
    }
}
customElements.define('my-header', myHeader);


class myFooter extends HTMLElement {
        connectedCallback(){
            this.innerHTML = `
            
            <footer>
                <p>@Copy Rights Alex Jenkins </p>
            </footer>`

        }
}

customElements.define('my-footer', myFooter);