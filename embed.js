class QTPOCWebring extends HTMLElement {
    static observedAttributes = ["widget"];

    constructor() {
        super();
        this.render();
    }

    getTemplate() {
        const widget = this.getAttribute("widget") ?? "";

        if (widget === "simple") {
            return `
                <div style="display: flex; flex-direction: column; gap: 5px; align-items: center;" >
                    <a href="https://qtpoc-ring.netlify.app"><img src="https://qtpoc-ring.netlify.app/assets/widget-simple.png" /></a>
                    <div>
                        <a href="https://qtpoc-ring.netlify.app/previous">&lt;&lt; prev</a>
                        <a href="https://qtpoc-ring.netlify.app/random">random</a>
                        <a href="https://qtpoc-ring.netlify.app/next">next &gt;&gt;</a>
                    </div>
                </div>
                `
        }
        if (widget === "bordered") {
            return `
            <div
                style="
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    align-items: center;
                "
            >
                <a href="https://qtpoc-ring.netlify.app"
                    ><span
                        style="
                            display: inline-block;
                            padding: 5px;
                            border: 1px solid rgb(255, 255, 255);
                            border-image: linear-gradient(
                                180deg,
                                rgb(226, 22, 192) 0%,
                                rgb(242, 191, 23) 20%,
                                rgb(223, 211, 0) 40%,
                                rgb(157, 250, 44) 60%,
                                rgb(12, 77, 255) 80%,
                                rgb(104, 31, 199) 100%
                            );
                            border-image-slice: 1;
                            background: black;
                            font-weight: bold;
                            color: yellow;
                        "
                        >QTPOC Webring</span
                    ></a
                >
                <div>
                    <a
                        style="color: yellow"
                        href="https://qtpoc-ring.netlify.app/previous"
                        >&lt;&lt; prev</a
                    >
                    <a
                        style="color: yellow"
                        href="https://qtpoc-ring.netlify.app/random"
                        >random</a
                    >
                    <a
                        style="color: yellow"
                        href="https://qtpoc-ring.netlify.app/next"
                        >next &gt;&gt;</a
                    >
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