const createNav = () => {
    let nav = document.querySelector('.navigationbar');

    nav.innerHTML = `
    <section class="navigationbar">
        <div class="navigation">
            <div class="container">
                <div class="navbar">
                    <div class="logo-toggle-container">
                        <a href="trial.html">
                            <img src="images/logoo copy.png">
                        </a>
                        <span class="toggle-box">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    <ul class="menu">
                        <li><a href="trial.html">HOME</a></li>
                        <li><a href="#">NEW IN</a></li>
                        <li><a href="#">DIAMOND +</a>
                            <ul>
                                <li><a href="#drings.html">RINGS</a></li>
                                <li><a href="#dearrings.html">EARRINGS</a></li>
                                <li><a href="#dnecklaces.html">NECKLACES</a></li>
                                <li><a href="#dbracelets.html">BRACELETS</a></li>
                            </ul>
                        </li>
                        <li><a href="#">GOLD +</a>
                            <ul>
                                <li><a href="#grings.html">RINGS</a></li>
                                <li><a href="#gearrings.html">EARRINGS</a></li>
                                <li><a href="#gnecklaces.html">NECKLACES</a></li>
                                <li><a href="#gbracelets.html">BRACELETS</a></li>
                            </ul>
                        </li>
                        <li><a href="contactus.html">CONTACT US</a></li>

                        <li><a href="#"><i class="ri-search-line"></i></a></li>
                        <!--Cart Start-->

                        <li><a href="#">
                                <div class="cart-icon"><i class="ri-shopping-bag-line"></i></div>
                            </a></li>

                        <div class="cart-window hide">
                            <h2 class="ShopBag">Shopping Bag</h2>
                            <div class="cart-wrapper">
                                <div class="cart-item">
                                    <img src="Images/whiteRook.jpg" alt="">
                                    <div class="details">
                                        <span class="name"> Clementine Silver White Rook</span>
                                        <div class="btn-wrapper">
                                            <span class="minus">-</span>
                                            <span class="num">1</span>
                                            <span class="add">+</span>
                                        </div>
                                        <span class="price"> Price: 15200 LE</span>
                                    </div>
                                </div>
                                <!--Item 2-->
                                <div class="cart-item">
                                    <img src="Images/r5.png" alt="">
                                    <div class="details">
                                        <span class="name">Clementine Silver Snowflake</span>
                                        <div class="btn-wrapper">
                                            <span class="minus1">-</span>
                                            <span class="num1">1</span>
                                            <span class="add1">+</span>
                                        </div>
                                        <span class="price"> Price: 11000 LE</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total">Total: 26200 LE</div>
                            <button class="checkout">checkout</button>
                        </div>

                        <!--Cart End-->
                        <li><a href="#"><i class="ri-account-circle-line"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $(".navigation .navbar .logo-toggle-container .toggle-box").click(function () {
                $(".navigation .menu").stop().slideToggle();
            });
        });
    </script>
`;
}

createNav();