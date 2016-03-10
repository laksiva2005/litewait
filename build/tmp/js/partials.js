(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('cart/cart-summary.html',
    '<div class="container shopping-cart">\n' +
    '\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-8 cart-left"> \n' +
    '    	 <h1>Order id : <span>4269-2215</span></h1>\n' +
    '         <div class="table-responsive">\n' +
    '          <table class="table">\n' +
    '          	<thead>\n' +
    '             <tr>\n' +
    '                <th>Item</th>\n' +
    '                <th class="right">Price</th>\n' +
    '                <th class="right">Quantity</th>\n' +
    '             </tr>\n' +
    '   			</thead>\n' +
    '            <tbody>\n' +
    '              <tr>\n' +
    '                <td>\n' +
    '                	<table class="sub-table">\n' +
    '                    	<tr>\n' +
    '                        	<td><img src="img/cart-1.jpg" class="product img-responsive" /></td>\n' +
    '                            <td> <h3>Egg rol 2</h3>\n' +
    '                    <p>Lorem ipsum dolor sit amet <br/> consectetuer adipiscing elit.</p></td>\n' +
    '                        \n' +
    '                        </tr>\n' +
    '                      \n' +
    '                    </table>\n' +
    '                </td>\n' +
    '                <td class="">$59.00</td>\n' +
    '                <td class="">2</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '              	<td colspan="3" class="blank">&nbsp; </td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td>\n' +
    '                	<table class="sub-table">\n' +
    '                    	<tr>\n' +
    '                        	<td><img src="img/cart-1.jpg" class="product img-responsive" /></td>\n' +
    '                            <td> <h3>Egg rol 2</h3>\n' +
    '                    <p>Lorem ipsum dolor sit amet <br/> consectetuer adipiscing elit.</p></td>\n' +
    '                        \n' +
    '                        </tr>\n' +
    '                      \n' +
    '                    </table>\n' +
    '                </td>\n' +
    '                <td class="">$59.00</td>\n' +
    '                <td class="">2</td>\n' +
    '              </tr>\n' +
    '               <tfoot>\n' +
    '                <tr>\n' +
    '                  <td colspan="3">Subtotal (2 items):   <span class="value">$177.00</span></td>\n' +
    '                </tr>\n' +
    ' 			 </tfoot>\n' +
    '              \n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '    \n' +
    '    \n' +
    '    </div>\n' +
    '    <div class="col-md-4 cart-right">\n' +
    '\n' +
    '      <div class="order-summary no-border">\n' +
    '        <h2>Order summary</h2>\n' +
    '        <div class="col-md-12 table-wrap">\n' +
    '          <table class="table">\n' +
    '            <tbody>\n' +
    '              <tr>\n' +
    '                <td class="sub">Subtotal (2 items) :</td>\n' +
    '                <td class="value right">$177.00</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td>Convenience Fee : </td>\n' +
    '                <td class="sub-total-end right">$0.00</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td>Total before Tax : </td>\n' +
    '                <td class="right">$177.00</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td>Estimated tax to be collected : </td>\n' +
    '                <td class="right">$0.00</td>\n' +
    '              </tr>\n' +
    '              <tr class="total">\n' +
    '                <td class="sub">Order total: </td>\n' +
    '                <td class="value right">$177.00</td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <div class="clearfix"></div>\n' +
    '      </div>\n' +
    '      \n' +
    '      \n' +
    '      <div class="product-widget">\n' +
    '            <h2><a href="shop-detail-menu.html">Charlie\'s Sandwich</a></h2>\n' +
    '            <img src="img/search-result-1.jpg" />\n' +
    '            \n' +
    '            <div class="cnt"> <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '              <p>0.98 mi Distance from search location</p>\n' +
    '              <p class="wait">20 m Wait Time</p>\n' +
    '              <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '            </div>\n' +
    '   \n' +
    '      \n' +
    '      \n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  \n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('cart/cart.html',
    '<div class="container shopping-cart">\n' +
    '\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-8 cart-left"> \n' +
    '    	 <h1>Shopping Cart</h1>\n' +
    '         <div class="table-responsive">\n' +
    '          <table class="table">\n' +
    '          	<thead>\n' +
    '             <tr>\n' +
    '                <th>Item</th>\n' +
    '                <th class="right">Price</th>\n' +
    '                <th class="right">Quantity</th>\n' +
    '             </tr>\n' +
    '   			</thead>\n' +
    '            <tbody>\n' +
    '              <tr>\n' +
    '                <td>\n' +
    '                	<table class="sub-table">\n' +
    '                    	<tr>\n' +
    '                        	<td><img src="img/cart-1.jpg" class="product img-responsive" /></td>\n' +
    '                            <td> <h3>Egg rol 2</h3>\n' +
    '                    <p>Lorem ipsum dolor sit amet <br/> consectetuer adipiscing elit.</p>\n' +
    '                    </td>\n' +
    '                        \n' +
    '                        </tr>\n' +
    '                      \n' +
    '                    </table>\n' +
    '                </td>\n' +
    '                <td class="">$59.00</td>\n' +
    '                <td class="">2</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '              	<td colspan="3" class="blank">&nbsp; </td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td>\n' +
    '                	<table class="sub-table">\n' +
    '                    	<tr>\n' +
    '                        	<td><img src="img/cart-1.jpg" class="product img-responsive" /></td>\n' +
    '                            <td> <h3>Egg rol 2</h3>\n' +
    '                    <p>Lorem ipsum dolor sit amet <br/> consectetuer adipiscing elit.</p>\n' +
    '                    </td>\n' +
    '                        \n' +
    '                        </tr>\n' +
    '                      \n' +
    '                    </table>\n' +
    '                </td>\n' +
    '                <td class="">$59.00</td>\n' +
    '                <td class="">2</td>\n' +
    '              </tr>\n' +
    '               <tfoot>\n' +
    '                <tr>\n' +
    '                  <td colspan="3">Subtotal (2 items):   <span class="value">$177.00</span></td>\n' +
    '                </tr>\n' +
    ' 			 </tfoot>\n' +
    '              \n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '    \n' +
    '    \n' +
    '    </div>\n' +
    '    <div class="col-md-4 cart-right">\n' +
    '      <h2>Check out</h2>\n' +
    '      <a href="thankyou.html" class="btn place-order btn-block">Place your Order</a>\n' +
    '      <p class="place-order-notify">By placing your order, you agree to litewait’s <a href="#">privacy notice</a> and <a href="#">conditions of use</a></p>\n' +
    '      <div class="order-summary">\n' +
    '        <h2>Order summary</h2>\n' +
    '        <div class="col-md-12 table-wrap">\n' +
    '          <table class="table">\n' +
    '            <tbody>\n' +
    '              <tr>\n' +
    '                <td class="sub">Subtotal (2 items) :</td>\n' +
    '                <td class="value right">$177.00</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td>Convenience Fee : </td>\n' +
    '                <td class="sub-total-end right">$0.00</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td>Total before Tax : </td>\n' +
    '                <td class="right">$177.00</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <td>Estimated tax to be collected : </td>\n' +
    '                <td class="right">$0.00</td>\n' +
    '              </tr>\n' +
    '              <tr class="total">\n' +
    '                <td class="sub">Order total: </td>\n' +
    '                <td class="value right">$177.00</td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <div class="clearfix"></div>\n' +
    '      </div>\n' +
    '      <div class="payment-method">\n' +
    '        <h2>Payment method</h2>\n' +
    '        <p><img src="img/ic-visa.gif" /><span>Visa</span><span>ending in 7519</span></p>\n' +
    '      </div>\n' +
    '      <div class="billing-address">\n' +
    '      	<h3>Biling Address:</h3>\n' +
    '        <p>Louise Jane Doe  <br/>\n' +
    '5844 South Oak Street <br/>\n' +
    'Chicago, Illinois 60667 </p>\n' +
    '      </div>\n' +
    '      <div class="product-widget">\n' +
    '            <h2><a href="shop-detail-menu.html">Charlie\'s Sandwich</a></h2>\n' +
    '            <img src="img/search-result-1.jpg" />\n' +
    '            \n' +
    '            <div class="cnt"> <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '              <p>0.98 mi Distance from search location</p>\n' +
    '              <p class="wait">20 m Wait Time</p>\n' +
    '              <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '            </div>\n' +
    '   \n' +
    '      \n' +
    '      \n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '  	<div class="cart-recent-view">\n' +
    '    	<h1>Your Favorite Orders</h1>\n' +
    '        <div class="row">\n' +
    '        	<div class="col-md-4 list">\n' +
    '            \n' +
    '            	<img src="img/recent-view-7.jpg" class="left" />\n' +
    '                <div class="right">\n' +
    '                <h3>Tom Kha Sou</h3>\n' +
    '            	<p class="order">Order Id : <a href="shopping-cart-summary.html">4269-2215</a> </p>\n' +
    '            	<p>Lorem ipsum dolor sit amet  </p>\n' +
    '<p class="price"><span class="pull-left">$59.00</span><span class="pull-right">Copy to cart<a href="#"><i class="fa fa-shopping-cart fa-lg"></i></a></span></p>\n' +
    '</div>\n' +
    '<div class="clearfix"></div>\n' +
    '             </div>\n' +
    '             <div class="col-md-4 list">\n' +
    '            \n' +
    '            	<img src="img/recent-view-7.jpg" class="left" />\n' +
    '                <div class="right">\n' +
    '                <h3>Tom Kha Sou</h3>\n' +
    '            	<p class="order">Order Id : <a href="shopping-cart-summary.html">4269-2215</a> </p>\n' +
    '            	<p>Lorem ipsum dolor sit amet  </p>\n' +
    '<p class="price"><span class="pull-left">$59.00</span><span class="pull-right">Copy to cart<a href="#"><i class="fa fa-shopping-cart fa-lg"></i></a></span></p>\n' +
    '</div>\n' +
    '<div class="clearfix"></div>\n' +
    '             </div>\n' +
    '             <div class="col-md-4 list">\n' +
    '            \n' +
    '            	<img src="img/recent-view-7.jpg" class="left" />\n' +
    '                <div class="right">\n' +
    '                <h3>Tom Kha Sou</h3>\n' +
    '            	<p class="order">Order Id : <a href="shopping-cart-summary.html">4269-2215</a> </p>\n' +
    '            	<p>Lorem ipsum dolor sit amet  </p>\n' +
    '<p class="price"><span class="pull-left">$59.00</span><span class="pull-right">Copy to cart<a href="#"><i class="fa fa-shopping-cart fa-lg"></i></a></span></p>\n' +
    '</div>\n' +
    '<div class="clearfix"></div>\n' +
    '             </div>\n' +
    '             <div class="clearfix"></div>\n' +
    '        \n' +
    '        </div>\n' +
    '    	\n' +
    '    \n' +
    '    \n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/home.html',
    '	<div class="container-fluid banner-wrap" ng-if="!nav.user.isLoggedIn">\n' +
    '    	<div class="banner">\n' +
    '        	<div class="col-md-10 cnt">\n' +
    '        	<p class="title-1">SAVE YOUR TIME...INCREASE PRODUCTIVE TIME<br/>\n' +
    '    SAVE MONEY!!</p>\n' +
    '    		<p class="title-2">Tired of waiting in queue, come join us</p>\n' +
    '            <a href="#" class="btn join"  ng-click="nav.openSignUpModal()">Join Now !!</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="container-fluid search-wrap" ui-view="search-box">\n' +
    '    </div>\n' +
    '    <div ng-if="nav.user.isLoggedIn" class="container most-visit">\n' +
    '	  <h1>Recently Viewed Locations</h1>\n' +
    '	  <div class="row">\n' +
    '	    <ul>\n' +
    '	      <li class="col-sm-6 col-md-3"> <img src="img/most-visit-1.jpg" class="img-responsive" />\n' +
    '	        <h3>Charlie\'s Sandwich</h3>\n' +
    '	        <p> <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i> </p>\n' +
    '	        <p>Los Angeles; California Dummy text for testing</p>\n' +
    '	        <p class="wait">20m Wait Time</p>\n' +
    '	        <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '	      </li>\n' +
    '	      <li class="col-sm-6 col-md-3"> <img src="img/most-visit-1.jpg" class="img-responsive" />\n' +
    '	        <h3>Charlie\'s Sandwich</h3>\n' +
    '	        <p><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i> </p>\n' +
    '	        <p>Los Angeles; California Dummy text for testing</p>\n' +
    '	        <p class="wait">20 m Wait Time</p>\n' +
    '	        <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '	      </li>\n' +
    '	      <li class="col-sm-6 col-md-3"> <img src="img/most-visit-1.jpg" class="img-responsive" />\n' +
    '	        <h3>Charlie\'s Sandwich</h3>\n' +
    '	        <p><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i> </p>\n' +
    '	        <p>Los Angeles; California Dummy text for testing</p>\n' +
    '	        <p class="wait">20 m Wait Time</p>\n' +
    '	        <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '	      </li>\n' +
    '	      <li class="col-sm-6 col-md-3"> <img src="img/most-visit-1.jpg" class="img-responsive" />\n' +
    '	        <h3>Charlie\'s Sandwich</h3>\n' +
    '	        <p><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i> </p>\n' +
    '	        <p>Los Angeles; California Dummy text for testing</p>\n' +
    '	        <p class="wait">20 m Wait Time</p>\n' +
    '	        <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '	      </li>\n' +
    '	      <div class="clearfix"></div>\n' +
    '	    </ul>\n' +
    '	  </div>\n' +
    '	</div>\n' +
    '    <div class="container-fluid feature-location">\n' +
    '        <div class="container">\n' +
    '	        <h1>featured locations</h1>\n' +
    '	        <uib-carousel interval="vm.myInterval" no-wrap="noWrapSlides">\n' +
    '		        <uib-slide ng-repeat="slide in vm.slides" active="slide.active" index="slide.id">\n' +
    '			      	<ul>\n' +
    '				      	<li class="col-sm-6 col-md-3" ng-repeat="slideData in slide.data">\n' +
    '				        	<img src="{{slideData.image}}" class="img-responsive" />\n' +
    '				            <p>{{slideData.text}}</p>\n' +
    '				            <div>\n' +
    '				            	<span class="pull-left">\n' +
    '				            		<i class="fa fa-star"></i>\n' +
    '				            		<i class="fa fa-star"></i>\n' +
    '				            		<i class="fa fa-star"></i>\n' +
    '				            		<i class="fa fa-star"></i>\n' +
    '				            		<i class="fa fa-star-half-o"></i>\n' +
    '				            	</span>\n' +
    '				            	<span class="pull-right">\n' +
    '				            		<a href="#" class="btn btn-default">{{slideData.offerText}}</a>\n' +
    '				            	</span>\n' +
    '				                <div class="clearfix"></div>\n' +
    '				            </div>\n' +
    '			            </li>\n' +
    '		            </ul>\n' +
    '	        	</uib-slide>\n' +
    '		    </uib-carousel>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <!--div ng-if="!nav.user.isLoggedIn" class="container browse-city">\n' +
    '      <h1>Browse your city</h1>\n' +
    '      <ul>\n' +
    '        <li class="col-sm-6 col-md-4 col-lg-3"><a href="#">New York City; New York</a></li>\n' +
    '        <li class="col-sm-6 col-md-4 col-lg-3"><a href="#">Los Angeles; California</a></li>\n' +
    '        <li class="col-sm-6 col-md-4 col-lg-3"><a href="#">Chicago; Illinois</a></li>\n' +
    '        <li class="col-sm-6 col-md-4 col-lg-3"><a href="#">Houston; Texas</a></li>\n' +
    '        <li class="col-sm-6 col-md-4 col-lg-3"><a href="#">Philadelphia; Pennsylvania</a></li>\n' +
    '        <li class="col-sm-6 col-md-4 col-lg-3"><a href="#">Phoenix; Arizona</a></li>\n' +
    '        <li class="col-sm-6 col-md-4 col-lg-3"><a href="#">San Antonio; Texas</a></li>\n' +
    '        <li class="col-sm-6 col-md-4 col-lg-3"><a href="#">San Diego; California</a></li>\n' +
    '        <div class="clear"></div>\n' +
    '      </ul>\n' +
    '      <div class="col-md-12">\n' +
    '        <div class="col-md-2 hidden-xs"></div>\n' +
    '        <div class="col-md-8 search">\n' +
    '          <p>Not able to find your city?</p>\n' +
    '          <input type="text" class="form-control col-md-9" />\n' +
    '          <a href="#" class="btn col-md-3">Enter</a> </div>\n' +
    '        <div class="col-md-2 hidden-xs"></div>\n' +
    '      </div>\n' +
    '    </div-->\n' +
    '    <div class="container testimonial">\n' +
    '      <h1>testimonials</h1>\n' +
    '      <div class="carousel slide" id="testimonial">\n' +
    '        <div class="carousel-inner">\n' +
    '          <div class="col-md-12 item active"> <img src="img/user-testimonial.jpg" class="img-responsive profile" />\n' +
    '            <h2>Louise S. Morgan</h2>\n' +
    '            <h6>Treatment, storage, and disposal (TSD) worker</h6>\n' +
    '            <p>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam PreviousLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam Previous ”</p>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 item"> <img src="img/user-testimonial.jpg" class="img-responsive profile" />\n' +
    '            <h2>Louise S. </h2>\n' +
    '            <h6>Treatment, storage,  worker</h6>\n' +
    '            <p>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam PreviousLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam Previous ”</p>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 item"> <img src="img/user-testimonial.jpg" class="img-responsive profile" />\n' +
    '            <h2> S. Morgan</h2>\n' +
    '            <h6>Treatment worker</h6>\n' +
    '            <p>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam PreviousLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam Previous ”</p>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 item"> <img src="img/user-testimonial.jpg" class="img-responsive profile" />\n' +
    '            <h2>Lo S. Morgan</h2>\n' +
    '            <h6> (TSD) worker</h6>\n' +
    '            <p>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam PreviousLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam Previous ”</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="next-prev-wrap"> <a data-slide="prev" href="#testimonial" class="carousel-control left">‹</a> <a data-slide="next" href="#testimonial" class="carousel-control right">›</a> </div>\n' +
    '      </div>\n' +
    '    </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('html/spinner.html',
    '<div class="spinner">\n' +
    '  <div>\n' +
    '    <i class="fa fa-spinner fa-spin"></i>\n' +
    '  </div>\n' +
    '  <div class="spinner-text">{{$message}}</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('navigation/navbar.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('navigation/search-box.html',
    '<div class="container search">\n' +
    '  <h1>SEARCH FOR YOUR FAVORITE RETAILER</h1>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-5 less-padding">\n' +
    '      <input ng-model="searchCriteria.location" type="text" class="form-control" placeholder="Location" />\n' +
    '    </div>\n' +
    '    <div class="col-md-5 less-padding">\n' +
    '      <input type="text" class="form-control" ng-model="searchCriteria.keyword" placeholder="Keyword" />\n' +
    '    </div>\n' +
    '    <div class="col-md-2 less-padding"><a class="btn btn-block" ng-click="searchFn($event)"><i class="fa fa-search"></i> Search</a></div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('orders/myorder.html',
    '<div class="container my-order-wrap">\n' +
    '         \n' +
    '   <div class="col-md-12 my-order">\n' +
    '   	<h1>My Orders</h1>\n' +
    '      <div class="row">\n' +
    '         <div class="col-md-3">\n' +
    '            <div class="filter">\n' +
    '               <ul>\n' +
    '                  <li>\n' +
    '                     <label>Filters</label>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                     <label>Status</label>\n' +
    '                     <div class="form-group">\n' +
    '                        <div class="checkbox">\n' +
    '                           <label>\n' +
    '                           <input type="checkbox" value="">\n' +
    '                           In-progress</label>\n' +
    '                        </div>\n' +
    '                        <div class="checkbox">\n' +
    '                           <label>\n' +
    '                           <input type="checkbox" value="">\n' +
    '                           Ready for pick-up</label>\n' +
    '                        </div>\n' +
    '                        <div class="checkbox">\n' +
    '                           <label>\n' +
    '                           <input type="checkbox" value="">\n' +
    '                           Complete</label>\n' +
    '                        </div>\n' +
    '                        \n' +
    '                     </div>\n' +
    '                  </li>\n' +
    '               </ul>\n' +
    '            </div>\n' +
    '         </div>\n' +
    '         <div class="col-md-9 order-status">\n' +
    '            <div class="table-responsive">\n' +
    '               \n' +
    '\n' +
    '                     <table class="table">\n' +
    '                        <thead>\n' +
    '                           <tr>\n' +
    '                              <th>Date / Time</th>\n' +
    '                              <th>Order ID</th>\n' +
    '                              <th>Merchant</th>\n' +
    '                              <th>Order Status</th>\n' +
    '                              <th>&nbsp;</th>\n' +
    '                           </tr>\n' +
    '                        </thead>\n' +
    '                        <tbody>\n' +
    '                           <tr>\n' +
    '                              <td>10/26/2015 12:30 PM </td>\n' +
    '                              <td><a class="orderid" ng-click="vm.go(\'cart.summary\')">4269-2215</a></td>\n' +
    '                              <td><a ng-click="vm.go(\'shop.detail\')" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
    '                              <td class="inprogress"> In progress</td>\n' +
    '                              <td>&nbsp;</td>\n' +
    '                           </tr>\n' +
    '                           <tr>\n' +
    '                              <td>10/26/2015 12:30 PM </td>\n' +
    '                              <td><a class="orderid" ng-click="vm.go(\'cart.summary\')">4269-2215</a></td>\n' +
    '                              <td><a ng-click="vm.go(\'shop.detail\')" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
    '                              <td class="ready-pickup"> Ready for pick-up</td>\n' +
    '                              <td>&nbsp;</td>\n' +
    '                           </tr>\n' +
    '                           <tr>\n' +
    '                              <td>10/26/2015 12:30 PM </td>\n' +
    '                              <td><a class="orderid" ng-click="vm.go(\'cart.summary\')">4269-2215</a></td>\n' +
    '                              <td><a ng-click="vm.go(\'shop.detail\')" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
    '                              <td class="complete"> Completed</td>\n' +
    '                              <td>&nbsp;</td>\n' +
    '                           </tr>\n' +
    '                           <tr>\n' +
    '                              <td>10/26/2015 12:30 PM </td>\n' +
    '                              <td><a class="orderid" ng-click="vm.go(\'cart.summary\')">4269-2215</a></td>\n' +
    '                              <td><a ng-click="vm.go(\'shop.detail\')" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
    '                              <td class="complete"> Completed</td>\n' +
    '                              <td>&nbsp;</td>\n' +
    '                           </tr>\n' +
    '                           <tr>\n' +
    '                              <td>10/26/2015 12:30 PM </td>\n' +
    '                              <td><a class="orderid" ng-click="vm.go(\'cart.summary\')">4269-2215</a></td>\n' +
    '                              <td><a ng-click="vm.go(\'shop.detail\')" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
    '                              <td class="complete"> Completed</td>\n' +
    '                              <td>&nbsp;</td>\n' +
    '                           </tr>\n' +
    '                        </tbody>\n' +
    '                     </table>\n' +
    '\n' +
    '            </div>\n' +
    '         </div>\n' +
    '         <div class="clearfix"></div>\n' +
    '      </div>\n' +
    '   </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('search/search.html',
    '<div class="container-fluid banner-wrap" ng-if="!user.isLoggedIn">\n' +
    '	<div class="banner">\n' +
    '    	<div class="col-md-10 cnt">\n' +
    '    	<p class="title-1">SAVE YOUR TIME...INCREASE PRODUCTIVE TIME<br/>\n' +
    'SAVE MONEY!!</p>\n' +
    '		<p class="title-2">Tired of waiting in queue, come join us</p>\n' +
    '        <a href="#" class="btn join"  ng-click="vm.openSignUpModal()">Join Now !!</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="container-fluid search-wrap" ui-view="search-box">\n' +
    '</div>\n' +
    '<div class="container search-result">\n' +
    '  <div class="col-md-12 best-bet">These retailers are your best bet for:<a href="#">Sandwich</a></div>\n' +
    '  <div class="row-fluid">\n' +
    '    <div class="col-md-4">\n' +
    '      <div class="specify">\n' +
    '        <ul>\n' +
    '          <li>\n' +
    '            <label>Filters</label>\n' +
    '            <a href="#" class="pull-right">Clear All</a> </li>\n' +
    '          <li>\n' +
    '            <label>Category</label>\n' +
    '            <a href="#" class="pull-right">Clear All</a>\n' +
    '            <div class="form-group">\n' +
    '              <div class="checkbox">\n' +
    '                <label>\n' +
    '                  <input type="checkbox" value="">\n' +
    '                  Calzones</label>\n' +
    '              </div>\n' +
    '              <div class="checkbox">\n' +
    '                <label>\n' +
    '                  <input type="checkbox" value="">\n' +
    '                  Pasta</label>\n' +
    '              </div>\n' +
    '              <div class="checkbox">\n' +
    '                <label>\n' +
    '                  <input type="checkbox" value="">\n' +
    '                  Pizza</label>\n' +
    '              </div>\n' +
    '              <div class="checkbox">\n' +
    '                <label>\n' +
    '                  <input type="checkbox" value="">\n' +
    '                  Salads</label>\n' +
    '              </div>\n' +
    '              <div class="checkbox">\n' +
    '                <label>\n' +
    '                  <input type="checkbox" value="">\n' +
    '                  Sandwiches </label>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <label>Rating</label>\n' +
    '            <div class="rating"><span class="pull-left"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '              <div class="clearfix"></div>\n' +
    '            </div>\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <label>Price</label>\n' +
    '            <div class="range-wrap">\n' +
    '              <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" >\n' +
    '              <br />\n' +
    '              <b>$ 0</b> <b class="pull-right">$ 600</b> </div>\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <label>Distance</label>\n' +
    '            <div class="range-wrap">\n' +
    '              <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl3" >\n' +
    '              <br />\n' +
    '              <b>.2 mi</b> <b class="pull-right">10 mi</b> </div>\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <label>Average Wait Time</label>\n' +
    '            <div class="range-wrap">\n' +
    '              <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl4" >\n' +
    '              <br />\n' +
    '              <b>10 m</b> <b class="pull-right">1.30 h</b> </div>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-8">\n' +
    '      <div class="list-wrap">\n' +
    '        <div class="list-item">\n' +
    '          <div class="col-xs-12 col-sm-8 col-md-8">\n' +
    '            <h2><a href="shop-detail-menu.html">Charlie\'s Sandwich</a></h2>\n' +
    '            <img src="img/search-result-1.jpg" class="pull-left" />\n' +
    '            <div> <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '              <p>0.98 mi Distance from search location</p>\n' +
    '              <p class="wait">20 m Wait Time</p>\n' +
    '              <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="col-xs-12 col-sm-4 col-md-4 menu">\n' +
    '            <h2>Popular Items</h2>\n' +
    '            <ul>\n' +
    '              <li><a href="#">Chicken Parmesan Sub</a></li>\n' +
    '              <li><a href="#">BBQ Chicken Sub</a></li>\n' +
    '              <li><a href="#">Veggie Sub</a></li>\n' +
    '              <li><a href="#">Chicken Ranch Hot Sandwich</a></li>\n' +
    '              <li><a href="#">Cold Cut Hot Sandwich</a></li>\n' +
    '            </ul>\n' +
    '            <a ng-click="vm.go(\'shop.detail\')" class="btn btn-block">View Retailer</a> </div>\n' +
    '          <div class="clearfix"></div>\n' +
    '        </div>\n' +
    '        <div class="list-item">\n' +
    '          <div class="col-xs-12 col-sm-8 col-md-8">\n' +
    '            <h2><a href="shop-detail-menu.html">Charlie\'s Sandwich</a></h2>\n' +
    '            <img src="img/search-result-1.jpg" class="pull-left" />\n' +
    '            <div> <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '              <p>0.98 mi Distance from search location</p>\n' +
    '              <p class="wait">20 m Wait Time</p>\n' +
    '              <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="col-xs-12 col-sm-4 col-md-4 menu">\n' +
    '            <h2>Popular Items</h2>\n' +
    '            <ul>\n' +
    '              <li><a href="#">Chicken Parmesan Sub</a></li>\n' +
    '              <li><a href="#">BBQ Chicken Sub</a></li>\n' +
    '              <li><a href="#">Veggie Sub</a></li>\n' +
    '              <li><a href="#">Chicken Ranch Hot Sandwich</a></li>\n' +
    '              <li><a href="#">Cold Cut Hot Sandwich</a></li>\n' +
    '            </ul>\n' +
    '            <a ng-click="vm.go(\'shop.detail\')" class="btn btn-block">View Retailer</a> </div>\n' +
    '          <div class="clearfix"></div>\n' +
    '        </div>\n' +
    '        <div class="list-item">\n' +
    '          <div class="col-xs-12 col-sm-8 col-md-8">\n' +
    '            <h2><a href="shop-detail-menu.html">Charlie\'s Sandwich</a></h2>\n' +
    '            <img src="img/search-result-1.jpg" class="pull-left" />\n' +
    '            <div> <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '              <p>0.98 mi Distance from search location</p>\n' +
    '              <p class="wait">20 m Wait Time</p>\n' +
    '              <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="col-xs-12 col-sm-4 col-md-4 menu">\n' +
    '            <h2>Popular Items</h2>\n' +
    '            <ul>\n' +
    '              <li><a href="#">Chicken Parmesan Sub</a></li>\n' +
    '              <li><a href="#">BBQ Chicken Sub</a></li>\n' +
    '              <li><a href="#">Veggie Sub</a></li>\n' +
    '              <li><a href="#">Chicken Ranch Hot Sandwich</a></li>\n' +
    '              <li><a href="#">Cold Cut Hot Sandwich</a></li>\n' +
    '            </ul>\n' +
    '            <a ng-click="vm.go(\'shop.detail\')" class="btn btn-block">View Retailer</a> </div>\n' +
    '          <div class="clearfix"></div>\n' +
    '        </div>\n' +
    '        <div class="list-item">\n' +
    '          <div class="col-xs-12 col-sm-8 col-md-8">\n' +
    '            <h2><a href="shop-detail-menu.html">Charlie\'s Sandwich</a></h2>\n' +
    '            <img src="img/search-result-1.jpg" class="pull-left" />\n' +
    '            <div> <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '              <p>0.98 mi Distance from search location</p>\n' +
    '              <p class="wait">20 m Wait Time</p>\n' +
    '              <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="col-xs-12 col-sm-4 col-md-4 menu">\n' +
    '            <h2>Popular Items</h2>\n' +
    '            <ul>\n' +
    '              <li><a href="#">Chicken Parmesan Sub</a></li>\n' +
    '              <li><a href="#">BBQ Chicken Sub</a></li>\n' +
    '              <li><a href="#">Veggie Sub</a></li>\n' +
    '              <li><a href="#">Chicken Ranch Hot Sandwich</a></li>\n' +
    '              <li><a href="#">Cold Cut Hot Sandwich</a></li>\n' +
    '            </ul>\n' +
    '            <a ng-click="vm.go(\'shop.detail\')" class="btn btn-block">View Retailer</a> </div>\n' +
    '          <div class="clearfix"></div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('shop/shop-detail-menu.html',
    '<div class="container shop-detail-wrap">\n' +
    '  \n' +
    '  <div class="shop-detail">\n' +
    '    <div class="col-sm-6 col-md-4"> <img src="img/shop-1.jpg" class="img-responsive"/> </div>\n' +
    '    <div class="col-sm-6 col-md-3 info">\n' +
    '      <h2>Charlie\'s Sandwich</h2>\n' +
    '	  <p><a href="#">www.charliebreads.com</a></p>\n' +
    '      <p> 429 Columbus Ave, Boston,<br/>\n' +
    '        MA 02116, United States </p>\n' +
    '      <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '      <p>0.98 mi Distance from search location</p>\n' +
    '      <p>20m Wait Time</p>\n' +
    '      <p>Open 11:00 AM to 4:00 AM</p>\n' +
    '    </div>\n' +
    '    <div class="col-sm-12 col-md-5 location"> <img src="img/shop-map.jpg" class="img-responsive"/> </div>\n' +
    '    <div class="clearfix"></div>\n' +
    '  </div>\n' +
    '  <div class="menu-detail-wrap">\n' +
    '    <div class="tabbable tabs-left">\n' +
    '    <div class="menu-detail-wrap">\n' +
    '      <div class="col-md-4 menu-items">\n' +
    '        <h2>Category</h2>\n' +
    '        <ul>\n' +
    '          <li><a href="#tab1" data-toggle="tab"><img src="img/ic-menuitem.png" />Appetizers</a></li>\n' +
    '          <li><a href="#tab2" data-toggle="tab"><img src="img/ic-menuitem.png" />Salads</a></li>\n' +
    '          <li><a href="#tab3" data-toggle="tab"><img src="img/ic-menuitem.png" />Pita Sandwiches</a></li>\n' +
    '          <li><a href="#tab4" data-toggle="tab"><img src="img/ic-menuitem.png" />Veggie Pitas</a></li>\n' +
    '          <li><a href="#tab5" data-toggle="tab"><img src="img/ic-menuitem.png" />Noodle and Noodle Soup</a></li>\n' +
    '          <li><a href="#tab6" data-toggle="tab"><img src="img/ic-menuitem.png" />Over Rice</a></li>\n' +
    '          <li><a href="#tab7" data-toggle="tab"><img src="img/ic-menuitem.png" />Stir-Fried Noodle</a></li>\n' +
    '          <li><a href="#tab8" data-toggle="tab"><img src="img/ic-menuitem.png" />A La Carte</a></li>\n' +
    '          <li><a href="#tab9" data-toggle="tab"><img src="img/ic-menuitem.png" />Curry</a></li>\n' +
    '          <li><a href="#tab10" data-toggle="tab"><img src="img/ic-menuitem.png" />Rice</a></li>\n' +
    '          <li><a href="#tab11" data-toggle="tab"><img src="img/ic-menuitem.png" />Seafood Special</a></li>\n' +
    '          <li><a href="#tab12" data-toggle="tab"><img src="img/ic-menuitem.png" />Desserts</a></li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '      <div class="col-md-8 popular-items">\n' +
    '      <h2>Detailed Items</h2>\n' +
    '        <div class="tab-content">\n' +
    '          <div class="tab-pane active" id="tab1">\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Antipasto Kabobs</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Cheese Ball</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Antipasto Kabobs</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content"> <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Cheese Ball</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Antipasto Kabobs</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content"> <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Cheese Ball</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Antipasto Kabobs</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content"> <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Cheese Ball</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Antipasto Kabobs</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content"> <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Cheese Ball</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Antipasto Kabobs</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content"> <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Cheese Ball</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Antipasto Kabobs</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content"> <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Cheese Ball</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Antipasto Kabobs</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content"> <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Cheese Ball</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            \n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab2">\n' +
    '          	\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Tomato-Peach Salad </a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Creole Green Beans</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Tomato-Peach Salad </a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Creole Green Beans</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Tomato-Peach Salad </a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Creole Green Beans</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Tomato-Peach Salad </a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Creole Green Beans</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Tomato-Peach Salad </a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Creole Green Beans</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Tomato-Peach Salad </a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Creole Green Beans</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Tomato-Peach Salad </a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Creole Green Beans</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Tomato-Peach Salad </a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Creole Green Beans</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          \n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab3">\n' +
    '          \n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Bologna sandwich</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Breakfast roll</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Bologna sandwich</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Breakfast roll</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Bologna sandwich</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Breakfast roll</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Bologna sandwich</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Breakfast roll</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Bologna sandwich</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Breakfast roll</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Bologna sandwich</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Breakfast roll</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Bologna sandwich</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Breakfast roll</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Bologna sandwich</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Breakfast roll</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            \n' +
    '          \n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab4"> \n' +
    '          \n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Veggie-Stack Pita</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mediterranean Pitas</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div><div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Veggie-Stack Pita</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mediterranean Pitas</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Veggie-Stack Pita</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mediterranean Pitas</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Veggie-Stack Pita</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mediterranean Pitas</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Veggie-Stack Pita</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mediterranean Pitas</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Veggie-Stack Pita</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mediterranean Pitas</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Veggie-Stack Pita</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mediterranean Pitas</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Veggie-Stack Pita</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mediterranean Pitas</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          \n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab5"> \n' +
    '          \n' +
    '          \n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Longevity noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Teriyaki chicken noodle</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Longevity noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Teriyaki chicken noodle</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Longevity noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Teriyaki chicken noodle</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Longevity noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Teriyaki chicken noodle</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Longevity noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Teriyaki chicken noodle</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Longevity noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Teriyaki chicken noodle</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Longevity noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Teriyaki chicken noodle</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Longevity noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Teriyaki chicken noodle</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          \n' +
    '           </div>\n' +
    '          <div class="tab-pane" id="tab6"> \n' +
    '          \n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken Supreme</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mushroom Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken Supreme</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mushroom Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken Supreme</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mushroom Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken Supreme</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mushroom Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken Supreme</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mushroom Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken Supreme</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mushroom Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken Supreme</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mushroom Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken Supreme</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mushroom Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab7">\n' +
    '          <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken noodle stir-fry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chinese Fried Noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken noodle stir-fry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chinese Fried Noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken noodle stir-fry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chinese Fried Noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken noodle stir-fry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chinese Fried Noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken noodle stir-fry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chinese Fried Noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken noodle stir-fry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chinese Fried Noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken noodle stir-fry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chinese Fried Noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken noodle stir-fry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chinese Fried Noodles</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            \n' +
    '          \n' +
    '           </div>\n' +
    '          <div class="tab-pane" id="tab8"> \n' +
    '          <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 1</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 2</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 1</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 2</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 1</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 2</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 1</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 2</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 1</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 2</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 1</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 2</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 1</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 2</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 1</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">A La Carte - 2</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          \n' +
    '           </div>\n' +
    '          <div class="tab-pane" id="tab9">\n' +
    '          <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Pumpkin Egg curry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken tikka masala</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Pumpkin Egg curry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken tikka masala</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Pumpkin Egg curry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken tikka masala</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Pumpkin Egg curry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken tikka masala</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Pumpkin Egg curry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken tikka masala</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Pumpkin Egg curry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken tikka masala</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Pumpkin Egg curry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken tikka masala</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Pumpkin Egg curry</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chicken tikka masala</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          \n' +
    '           </div>\n' +
    '          <div class="tab-pane" id="tab10"> \n' +
    '          <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mixed Vegetable Pulao</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mint Coriander Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mixed Vegetable Pulao</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mint Coriander Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mixed Vegetable Pulao</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mint Coriander Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mixed Vegetable Pulao</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mint Coriander Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mixed Vegetable Pulao</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mint Coriander Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mixed Vegetable Pulao</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mint Coriander Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mixed Vegetable Pulao</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mint Coriander Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mixed Vegetable Pulao</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Mint Coriander Rice</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          \n' +
    '           </div>\n' +
    '          <div class="tab-pane" id="tab11">\n' +
    '          <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Grilled Shrimp Scampi</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fish Tacos</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Grilled Shrimp Scampi</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fish Tacos</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Grilled Shrimp Scampi</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fish Tacos</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Grilled Shrimp Scampi</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fish Tacos</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Grilled Shrimp Scampi</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fish Tacos</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Grilled Shrimp Scampi</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fish Tacos</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Grilled Shrimp Scampi</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fish Tacos</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Grilled Shrimp Scampi</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fish Tacos</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab12"> \n' +
    '          <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fruit Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fruit Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fruit Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fruit Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fruit Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fruit Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fruit Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="row-fluid">\n' +
    '              <div class="col-sm-6 col-md-6 item-left">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                       <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Chocolate Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-sm-6 col-md-6 item-right">\n' +
    '                <div class="row list">\n' +
    '                  <div class="col-xs-9 col-sm-8 col-md-9"> <img src="img/ic-popularitem.png" class="pull-left" />\n' +
    '                    <div class="content">\n' +
    '                      <h3><a href="#" data-toggle="modal" data-target="#menu-detail">Fruit Desserts</a></h3>\n' +
    '                      <p>Lorem ipsum dolor sit amet</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-xs-3 col-sm-4 col-md-3"> <a href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">$59</span> </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="clearfix"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '    \n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/ch-pwd.html',
    '<div class="container change-password">\n' +
    '<h1>Change Password</h1>\n' +
    '<div class="col-md-3 hidden-xs"></div>\n' +
    '<div class="col-md-6 form-wrap">\n' +
    ' <form novalidate name="vm.chPwdForm" ng-submit="vm.changePassword(chPwdForm.$valid)" role="form">\n' +
    '  <div class="form-group">\n' +
    '    <input type="password" required name="old_password" ng-model="vm.pwd.old_password" class="form-control"  placeholder="Old Password">\n' +
    '    <div ng-if="vm.chPwdForm.$submitted && vm.chPwdForm.old_password.$invalid" ng-messages="vm.chPwdForm.old_password.$error" class="alert alert-danger">\n' +
    '      <div ng-message="required">Old Password field is required</div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <input type="password" pattern="{{vm.pwd.passwordPattern}}" required name="new_password" ng-model="vm.pwd.new_password" class="form-control"  placeholder="New Password">\n' +
    '    <div ng-if="vm.chPwdForm.$submitted && vm.chPwdForm.new_password.$invalid" ng-messages="vm.chPwdForm.new_password.$error" class="alert alert-danger">\n' +
    '      <div ng-message="required">New Password field is required</div>\n' +
    '      <div ng-message="pattern">Minimum 8 characters and must contain a numeric, uppercase, lowercase, as well as special character</div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <input type="password" required name="confirm_password" ng-model="vm.pwd.confirm_password"   compare-to="vm.pwd.new_password" class="form-control" placeholder="Confirm Password">\n' +
    '    <div ng-if="vm.chPwdForm.$submitted && vm.chPwdForm.confirm_password.$invalid" ng-messages="vm.chPwdForm.confirm_password.$error" class="alert alert-danger">\n' +
    '      <div ng-message="required">Confirm Password field is required</div>\n' +
    '      <div ng-message="compareTo">Confirm Password must be equal to Password</div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <button type="submit" class="btn btn-default pull-right">Submit</button>\n' +
    '</form>\n' +
    '\n' +
    '</div>\n' +
    '<div class="col-md-3 hidden-xs"></div> \n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/profile.html',
    '<div class="container edit-profile">\n' +
    '   <div>\n' +
    '   			<div class="col-md-12">\n' +
    '               <ul class="nav nav-tabs">\n' +
    '                  <li class="active"><a data-toggle="tab" href="#edit-profile">Edit Profile</a></li>\n' +
    '                  <li><a data-toggle="tab" href="#payment-config">Payment Configuration</a></li>\n' +
    '               </ul>\n' +
    '               </div>\n' +
    '               <div class="tab-content">\n' +
    '                  <div id="edit-profile" class="tab-pane fade in active">\n' +
    '                  <h1>Edit Profile</h1>\n' +
    '                  \n' +
    '                  <div class="col-md-12 form-wrap">\n' +
    '      <form novalidate name="vm.editProfileForm" ng-submit="vm.updateProfile(vm.editProfileForm.$valid)" role="form">\n' +
    '         <div class="col-md-6">\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" name="user_name" maxlength="50" ng-model="vm.profile.user_name" class="form-control"  placeholder="Name">\n' +
    '               <div ng-if="vm.editProfileForm.$submitted && vm.editProfileForm.user_name.$invalid" ng-messages="vm.editProfileForm.user_name.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="maxlength">Please enter a valid Username</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '            	<textarea name="address_1" ng-model="vm.profile.contact_address_1" class="form-control"  placeholder="Address"></textarea>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" name="state" ng-model="vm.profile.contact.state" class="form-control" placeholder="State">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" name="zip_code" ng-model="vm.profile.contact.zip_code" class="form-control" placeholder="Zipcode">\n' +
    '            </div>\n' +
    '         </div>\n' +
    '         <div class="col-md-6">\n' +
    '            <div class="form-group">\n' +
    '               <input type="email" name="mail_id" ng-model="vm.profile.contact.mail_id" class="form-control" placeholder="Email">\n' +
    '               <div ng-if="vm.editProfileForm.$submitted && vm.editProfileForm.mail_id.$invalid" ng-messages="vm.editProfileForm.mail_id.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="email">Please enter a valid Email Id</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" name="phone" ng-model="vm.profile.contact.phone" class="form-control" placeholder="Phone">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" name="city" ng-model="vm.profile.contact.city" class="form-control" placeholder="City">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" name="country" ng-model="vm.profile.contact.country" class="form-control" placeholder="Country">\n' +
    '            </div>\n' +
    '         </div>\n' +
    '         <div class="clearfix"></div>\n' +
    '         <div class="col-md-12">\n' +
    '            <button type="submit" class="btn btn-default pull-right">Submit</button>\n' +
    '            <button type="submit" ng-click="vm.cancel($event)" class="btn btn-default pull-right">Cancel</button>\n' +
    '            <div class="clearfix"></div>\n' +
    '         </div>\n' +
    '      </form>\n' +
    '   </div>\n' +
    '                     \n' +
    '                  </div>\n' +
    '                   <div id="payment-config" class="tab-pane fade in">\n' +
    '                    <h1>Payment Configuration</h1>\n' +
    '                  \n' +
    '                  <div class="col-md-12 form-wrap">\n' +
    '      <form role="form" novalidate name="vm.editPaymentForm" ng-submit="vm.savePayment(vm.editPaymentForm.$valid)">\n' +
    '         <div class="col-md-6">\n' +
    '            <div class="form-group">\n' +
    '               <select class="form-control" name="card_type" ng-model="vm.payment.card_type" required>\n' +
    '                  <option value="" selected>Card Type</option>\n' +
    '                  <option value="master">Mastercard</option>\n' +
    '                  <option value="visa">Visa</option>\n' +
    '               </select>\n' +
    '               <div ng-if="vm.editPaymentForm.$submitted && vm.editPaymentForm.card_type.$invalid" ng-messages="vm.editPaymentForm.mail_id.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="required">Card type is required</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '            	<input required pattern="{{vm.AUTH_PROPS.CARD}}" type="text" class="form-control"  placeholder="Card Number" name="card_number" ng-model="vm.payment.card_number">\n' +
    '               <div ng-if="vm.editPaymentForm.$submitted && vm.editPaymentForm.card_number.$invalid" ng-messages="vm.editPaymentForm.card_number.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="required">Card number is required</div>\n' +
    '                  <div ng-message="pattern">Please enter a valid Credit/Debit Card Number</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              	<input required maxlength="50" type="text" class="form-control"  placeholder="Name as in card" name="card_name" ng-model="vm.payment.card_name">\n' +
    '               <div ng-if="vm.editPaymentForm.$submitted && vm.editPaymentForm.card_name.$invalid" ng-messages="vm.editPaymentForm.card_name.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="required">Card name is required</div>\n' +
    '                  <div ng-message="maxlength">Card number should have maximum 50 characters</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input date-as-ms required uib-datepicker-popup="MM/yyyy" min-mode="month" type="text" class="form-control" placeholder="Expiry date" name="card_expiry" ng-model="vm.payment.card_expiry" is-open="vm.pay.opened" on-open-focus="vm.pay.onOpenFocus">\n' +
    '               <span class="input-group-btn">\n' +
    '                <button type="button" class="btn btn-default" ng-click="vm.open1()"><i class="glyphicon glyphicon-calendar"></i></button>\n' +
    '              </span>\n' +
    '               <div ng-if="vm.editPaymentForm.$submitted && vm.editPaymentForm.card_expiry.$invalid" ng-messages="vm.editPaymentForm.card_expiry.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="required">Card Expiry is required</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input required pattern="{{AUTH_PROPS.CVV}}" type="text" class="form-control" placeholder="CVV" name="cvv" ng-model="vm.payment.cvv">\n' +
    '               <div ng-if="vm.editPaymentForm.$submitted && vm.editPaymentForm.cvv.$invalid" ng-messages="vm.editPaymentForm.cvv.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="required">CVV is required</div>\n' +
    '                  <div ng-message="pattern">Please enter a valid CVV</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input required maxlength="100" type="text" class="form-control" placeholder="Address 1" name="address_1" ng-model="vm.payment.contact.address_1">\n' +
    '               <div ng-if="vm.editPaymentForm.$submitted && vm.editPaymentForm.address_1.$invalid" ng-messages="vm.editPaymentForm.address_1.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="required">Address 1 is required</div>\n' +
    '                  <div ng-message="maxlength">Address 1 should have maximum 100 characters</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input required maxlength="50" type="text" class="form-control" placeholder="City" name="city" ng-model="vm.payment.contact.city">\n' +
    '               <div ng-if="vm.editPaymentForm.$submitted && vm.editPaymentForm.city.$invalid" ng-messages="vm.editPaymentForm.city.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="required">City is required</div>\n' +
    '                  <div ng-message="maxlength">City should have maximum 50 characters</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <select required class="form-control" name="state" ng-model="vm.payment.contact.state">\n' +
    '                  <option value="" selected>State</option>\n' +
    '                  <option value="Tamilnadu">Tamilnadu</option>\n' +
    '                  <option value="Kerala">Kerala</option>\n' +
    '                  <option value="Karnataka">Karnataka</option>\n' +
    '                  <option value="Andra">Andra</option>\n' +
    '               </select>\n' +
    '               <div ng-if="vm.editPaymentForm.$submitted && vm.editPaymentForm.state.$invalid" ng-messages="vm.editPaymentForm.state.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="required">State is required</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input required type="text" class="form-control" placeholder="Zip Code" name="zip_code" ng-model="vm.payment.contact.zip_code">\n' +
    '               <div ng-if="vm.editPaymentForm.$submitted && vm.editPaymentForm.zip_code.$invalid" ng-messages="vm.editPaymentForm.zip_code.$error" class="alert alert-danger">\n' +
    '                  <div ng-message="required">Zip Code is required</div>\n' +
    '               </div>\n' +
    '            </div>\n' +
    '            \n' +
    '            \n' +
    '         </div>\n' +
    '         <div class="col-md-6"></div>\n' +
    '     \n' +
    '         \n' +
    '         <div class="clearfix"></div>\n' +
    '  \n' +
    '    \n' +
    '\n' +
    '         <div class="col-md-6">\n' +
    '            <button type="submit" class="btn btn-default pull-right">Save</button>\n' +
    '            <button type="submit" class="btn btn-default pull-right" ng-click="vm.cancel($event)">Cancel</button>\n' +
    '            <div class="clearfix"></div>\n' +
    '            \n' +
    '         </div>\n' +
    '         \n' +
    '\n' +
    '      </form>\n' +
    '   </div>\n' +
    '                     \n' +
    '                  </div>\n' +
    '                  \n' +
    '                  \n' +
    '                  \n' +
    '               </div>\n' +
    '            </div>\n' +
    '   \n' +
    '</div>');
}]);
})();
