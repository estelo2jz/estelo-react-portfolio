import React from "react";
import PortfolioContainer from "../portfolio/portfolio-container";

export default function () {
    return (
        <div className="home-items-container">
            {/* show portfolio items from data */}
            {/* <PortfolioContainer /> */}
            <div class="wrap">
                <div class="apps">
                    <div class="app one">
                        <a href="https://ministore.netlify.app/" target="_blank">
                            <div class="top">
                                <div class="fa fa-heart">
                                <p>Mini Online Store</p>
                                {/* <div class="pic"></div> */}
                                </div>
                                <div className="image-helper">
                                    <div className="pic-one"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="app two">
                        <a href="https://companycultures.netlify.app/" target="_blank">
                            <div class="top">
                                <div class="fa fa-headphones">
                                <p href="">Top Company Cultures</p>
                                </div>
                                <div className="image-helper">
                                    <div className="pic-two"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="app three">
                        <a href="https://chinesefood.netlify.app/" target="_blank">
                            <div class="top">
                                <div class="fa fa-cutlery">
                                <p>Chinese Menu</p>
                                </div>
                                <div className="image-helper">
                                    <div className="pic-three"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="app four">
                        <a href="https://icydiamond.netlify.app/" target="_blank">
                            <div class="top">
                                <div class="fa fa-check">
                                <p href="">Icy Diamond Online</p>
                                </div>
                                <div className="image-helper">
                                    <div className="pic-four"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="app five">
                        <a href="https://barberclone.netlify.app/" target="_blank">
                            <div class="top">
                                <div class="fa fa-home">
                                <p href="">Barber Clone</p>
                                </div>
                                <div className="image-helper">
                                    <div className="pic-five"></div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="app six">
                        <a href="https://lawnpro.netlify.app/" target="_blank">
                            <div class="top">
                                <div class="fa fa-cutlery">
                                <p href="">Grass Pro</p>
                                </div>
                                <div className="image-helper">
                                    <div className="pic-six"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="app seven">
                        <a href="https://gummy-stickers.netlify.app/" target="_blank">
                            <div class="top">
                                <div class="fa fa-cutlery">
                                <p href="">Code Sticker</p>
                                </div>
                                <div className="image-helper">
                                    <div className="pic-seven"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="app eight">
                        <a href="https://svelte-razors-store.netlify.app/" target="_blank">
                            <div class="top">
                                <div class="fa fa-check">
                                <p href="">Razor</p>
                                </div>
                                <div className="image-helper">
                                    <div className="pic-eight"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}