(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/home.html',
    '	<div class="container-fluid banner-wrap" ng-if="!user.isLoggedIn">\n' +
    '    	<div class="banner">\n' +
    '        	<div class="col-md-10 cnt">\n' +
    '        	<p class="title-1">SAVE YOUR TIME...INCREASE PRODUCTIVE TIME<br/>\n' +
    '    SAVE MONEY!!</p>\n' +
    '    		<p class="title-2">Tired of waiting in queue, come join us</p>\n' +
    '            <a href="#" class="btn join"  ng-click="openSignUpModal()">Join Now !!</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="container-fluid search-wrap">\n' +
    '      <div class="container search">\n' +
    '        <h1>SEARCH FOR YOU FAVORITE RETAILER</h1>\n' +
    '        <div class="row">\n' +
    '          <div class="col-md-5 less-padding">\n' +
    '            <input type="text" class="form-control" placeholder="Location" />\n' +
    '          </div>\n' +
    '          <div class="col-md-5 less-padding">\n' +
    '            <input type="text" class="form-control" placeholder="Keyword" />\n' +
    '          </div>\n' +
    '          <div class="col-md-2 less-padding"><a href="search-before-login.html" class="btn btn-block"><i class="fa fa-search"></i> Search</a></div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div ng-if="user.isLoggedIn" class="container most-visit">\n' +
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
    '	        <uib-carousel interval="myInterval" no-wrap="noWrapSlides">\n' +
    '		        <uib-slide ng-repeat="slide in slides" active="slide.active" index="slide.id">\n' +
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
    '    <div ng-if="!user.isLoggedIn" class="container browse-city">\n' +
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
    '    </div>\n' +
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
    '                              <td><a class="orderid" href="shopping-cart-summary.html">4269-2215</a></td>\n' +
    '                              <td><a href="shop-detail-menu.html" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
    '                              <td class="inprogress"> In progress</td>\n' +
    '                              <td>&nbsp;</td>\n' +
    '                           </tr>\n' +
    '                           <tr>\n' +
    '                              <td>10/26/2015 12:30 PM </td>\n' +
    '                              <td><a class="orderid" href="shopping-cart-summary.html">4269-2215</a></td>\n' +
    '                              <td><a href="shop-detail-menu.html" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
    '                              <td class="ready-pickup"> Ready for pick-up</td>\n' +
    '                              <td>&nbsp;</td>\n' +
    '                           </tr>\n' +
    '                           <tr>\n' +
    '                              <td>10/26/2015 12:30 PM </td>\n' +
    '                              <td><a class="orderid" href="shopping-cart-summary.html">4269-2215</a></td>\n' +
    '                              <td><a href="shop-detail-menu.html" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
    '                              <td class="complete"> Completed</td>\n' +
    '                              <td>&nbsp;</td>\n' +
    '                           </tr>\n' +
    '                           <tr>\n' +
    '                              <td>10/26/2015 12:30 PM </td>\n' +
    '                              <td><a class="orderid" href="shopping-cart-summary.html">4269-2215</a></td>\n' +
    '                              <td><a href="shop-detail-menu.html" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
    '                              <td class="complete"> Completed</td>\n' +
    '                              <td>&nbsp;</td>\n' +
    '                           </tr>\n' +
    '                           <tr>\n' +
    '                              <td>10/26/2015 12:30 PM </td>\n' +
    '                              <td><a class="orderid" href="shopping-cart-summary.html">4269-2215</a></td>\n' +
    '                              <td><a href="shop-detail-menu.html" class="merchant">Charlie\'s Sandwich Shoppe</a></td>\n' +
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
  $templateCache.put('user/ch-pwd.html',
    '<div class="container change-password">\n' +
    '<h1>Change Password</h1>\n' +
    '<div class="col-md-3 hidden-xs"></div>\n' +
    '<div class="col-md-6 form-wrap">\n' +
    ' <form role="form">\n' +
    '  <div class="form-group">\n' +
    '    <input type="text" class="form-control"  placeholder="User Name">\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <input type="password" class="form-control"  placeholder="New Password">\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <input type="password" class="form-control" placeholder="Confirm Password">\n' +
    '  </div>\n' +
    '\n' +
    '  <button type="submit" class="btn btn-default pull-right">Submit</button>\n' +
    '</form>\n' +
    '\n' +
    '</div>\n' +
    '<div class="col-md-3 hidden-xs"></div>\n' +
    '\n' +
    '  \n' +
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
    '      <form role="form">\n' +
    '         <div class="col-md-6">\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control"  placeholder="Name">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '            	<textarea class="form-control"  placeholder="Address"></textarea>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="State">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="Zipcode">\n' +
    '            </div>\n' +
    '         </div>\n' +
    '         <div class="col-md-6">\n' +
    '            <div class="form-group">\n' +
    '               <input type="email" class="form-control" placeholder="Email">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="Phone">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="City">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="Country">\n' +
    '            </div>\n' +
    '         </div>\n' +
    '         <div class="clearfix"></div>\n' +
    '         <div class="col-md-12">\n' +
    '            <button type="submit" class="btn btn-default pull-right">Submit</button>\n' +
    '            <button type="submit" class="btn btn-default pull-right">Cancel</button>\n' +
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
    '      <form role="form">\n' +
    '\n' +
    '      	\n' +
    '         <div class="col-md-6">\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control"  placeholder="Card type">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '            	<input type="text" class="form-control"  placeholder="Card Number">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              	<input type="text" class="form-control"  placeholder="Name as in card">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="Expiry date">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="CVV">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="Address 1">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="Address 2">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="City">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '            <select class="form-control">\n' +
    '              <option value="" selected>State</option>\n' +
    '              <option value="1">Tamilnadu</option>\n' +
    '              <option value="2">Kerala</option>\n' +
    '              <option value="3">Karnataka</option>\n' +
    '              <option value="4">Andra</option>\n' +
    '          </select>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '               <input type="text" class="form-control" placeholder="Pincode">\n' +
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
    '         <button type="submit" class="btn btn-default pull-right">Save</button>\n' +
    '            <button type="submit" class="btn btn-default pull-right">Cancel</button>\n' +
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
