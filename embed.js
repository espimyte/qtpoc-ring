class QTPOCWebring extends HTMLElement {
    static observedAttributes = ["simple"];

    constructor() {
        super();
        this.render();
    }

    getTemplate() {
        if (this.getAttribute("simple")) {
            return `
                <div
                    style="
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                        align-items: center;
                    "
                >
                    <a href="https://qtpoc-ring.netlify.app"><img src="https://qtpoc-ring.netlify.app/assets/widget-simple.png" /></a>
                    <div>
                        <a href="https://qtpoc-ring.netlify.app/previous">&lt;&lt; prev</a>
                        <a href="https://qtpoc-ring.netlify.app/random">random</a>
                        <a href="https://qtpoc-ring.netlify.app/next">next &gt;&gt;</a>
                    </div>
                </div>
                `
        }
        return `
            <div style="display: flex; align-items: center">
                <a
                    style="margin-right: 7px"
                    href="https://qtpoc-ring.netlify.app/previous"
                    ><img src="https://qtpoc-ring.netlify.app/assets/widget-arrow-left.png"
                /></a>
                <a href="https://qtpoc-ring.netlify.app">
                    <div style="position: relative">
                        <a href="https://qtpoc-ring.netlify.app"
                            ><img src="https://qtpoc-ring.netlify.app/assets/widget.png"
                        /></a>
                        <a
                            href="https://qtpoc-ring.netlify.app/random"
                            style="position: absolute; right: 0px; top: 0px"
                        >
                            <img src="https://qtpoc-ring.netlify.app/assets/widget-random.png" />
                        </a>
                    </div>
                </a>
                <a
                    style="margin-left: 7px"
                    href="https://qtpoc-ring.netlify.app/next"
                    ><img src="https://qtpoc-ring.netlify.app/assets/widget-arrow-right.png"
                /></a>
            </div>
        `;
    }

    render() {
        this.innerHTML = this.getTemplate();
    }
}

customElements.define('qtpoc-webring', QTPOCWebring);