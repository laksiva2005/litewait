(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/merchant-create.html',
    '<div class="container edit-merchant">\n' +
    '	<div class="col-md-12">            \n' +
    '      <div id="edit-merchant" >\n' +
    '         <h1>{{mcr.type}} merchant</h1>      \n' +
    '         <div class="col-md-12 form-wrap">\n' +
    '            <form novalidate name="mcr.merchantForm" ng-submit="mcr.updateMerchant(mcr.merchantForm.$valid)" role="form">\n' +
    '               <div class="col-md-6">\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="hidden" name="id" ng-model="mcr.merchant.id">\n' +
    '                     <input type="text" name="username" maxlength="50" ng-model="mcr.merchant.username" class="form-control"  placeholder="Enter username">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.username.$invalid" ng-messages="mcr.merchantForm.username.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Username</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="password" name="password" maxlength="50" ng-model="mcr.merchant.password" class="form-control"  placeholder="Enter Password">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.password.$invalid" ng-messages="mcr.merchantForm.password.$error" class="alert alert-danger">\n' +
    '                        <!--div ng-message="required">Password is required</div-->\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="business_name" maxlength="50" ng-model="mcr.merchant.business_name" class="form-control"  placeholder="Enter bussiness name">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.business_name.$invalid" ng-messages="mcr.merchantForm.business_name.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Business Name</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="business_type" maxlength="50" ng-model="mcr.merchant.business_type" class="form-control"  placeholder="Enter business type">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.business_type.$invalid" ng-messages="mcr.merchantForm.business_type.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Business Type</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="contact_person" maxlength="50" ng-model="mcr.merchant.contact_person" class="form-control"  placeholder="Enter contact person name">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.contact_person.$invalid" ng-messages="mcr.merchantForm.contact_person.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Contact Person</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                  	<textarea name="address_1" ng-model="mcr.merchant.contact_details.address_1" class="form-control"  placeholder="Address"></textarea>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="state" ng-model="mcr.merchant.contact_details.state" class="form-control" placeholder="Enter state">\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="zip_code" ng-model="mcr.merchant.contact_details.zip_code" class="form-control" placeholder="Enter zipcode">\n' +
    '                  </div>\n' +
    '               </div>\n' +
    '               <div class="col-md-6">\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="email" name="mail_id" ng-model="mcr.merchant.contact_details.mail_id" class="form-control" placeholder="Enter email">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.mail_id.$invalid" ng-messages="mcr.merchantForm.mail_id.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="email">Please enter a valid Email Id</div>\n' +
    '                      </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="phone" ng-model="mcr.merchant.contact_details.phone" class="form-control" placeholder="Enter phone">\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="country" ng-model="mcr.merchant.contact_details.country" class="form-control" placeholder="Enter country">\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="hidden" name="city_id" ng-model="mcr.merchant.city_id">\n' +
    '                     <input type="text" name="city" maxlength="50" ng-model="mcr.merchant.city" class="form-control"  placeholder="Enter city name">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.city.$invalid" ng-messages="mcr.merchantForm.city.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Contact Person</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="hidden" name="region_id" ng-model="mcr.merchant.region_id">\n' +
    '                     <input type="text" name="region" maxlength="50" ng-model="mcr.merchant.region" class="form-control"  placeholder="Enter region">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.region.$invalid" ng-messages="mcr.merchantForm.region.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Contact Person</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="website" maxlength="50" ng-model="mcr.merchant.website" class="form-control"  placeholder="Enter website">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.website.$invalid" ng-messages="mcr.merchantForm.website.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Contact Person</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="photo" maxlength="50" ng-model="mcr.merchant.photo" class="form-control"  placeholder="Enter photo">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.photo.$invalid" ng-messages="mcr.merchantForm.photo.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Contact Person</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="open_time" maxlength="50" ng-model="mcr.merchant.open_time" class="form-control"  placeholder="Enter open time">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.open_time.$invalid" ng-messages="mcr.merchantForm.open_time.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Contact Person</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="close_time" maxlength="50" ng-model="mcr.merchant.close_time" class="form-control"  placeholder="Enter close time">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.close_time.$invalid" ng-messages="mcr.merchantForm.close_time.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Contact Person</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="text" name="avg_waiting_time" maxlength="50" ng-model="mcr.merchant.avg_waiting_time" class="form-control"  placeholder="Enter average waiting time">\n' +
    '                     <div ng-if="mcr.merchantForm.$submitted && mcr.merchantForm.avg_waiting_time.$invalid" ng-messages="mcr.merchantForm.avg_waiting_time.$error" class="alert alert-danger">\n' +
    '                        <div ng-message="maxlength">Please enter a valid Contact Person</div>\n' +
    '                     </div>\n' +
    '                  </div>\n' +
    '                  <div class="form-group">\n' +
    '                     <input type="checkbox" name="is_active" ng-true-value="\'Y\'" ng-false-value="\'N\'" ng-model="mcr.merchant.is_active"><label for="is_active">Is Active</label>\n' +
    '                  </div>\n' +
    '               </div>\n' +
    '               <div class="clearfix"></div>\n' +
    '               <div class="col-md-12">\n' +
    '                  <button type="submit" class="btn btn-default pull-right">Submit</button>\n' +
    '                  <button type="submit" ng-click="mcr.cancel($event)" class="btn btn-default pull-right">Cancel</button>\n' +
    '                  <div class="clearfix"></div>\n' +
    '               </div>\n' +
    '            </form>\n' +
    '         </div>               \n' +
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
  $templateCache.put('admin/merchant-list.html',
    '<div class="container merchant-list-wrap">\n' +
    '	<h1>Merchant List</h1>\n' +
    '	<div class="col-md-12 merchant-search">\n' +
    '		<div class="col-sm-12 col-md-6 form-wrap">\n' +
    '			<div class="form-group">\n' +
    '				<input type="text" ng-model="ml.merchant.keyword" class="form-control"  placeholder="Search...">\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="col-sm-12 col-md-6">\n' +
    '			<div class="form-group">\n' +
    '				<a ng-click="ml.initializeMerchant()" class="btn btn-default">Search</a>\n' +
    '				<a ng-click="nav.go(\'admin_merchant.new\')" class="btn btn-primary">Add New</a>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '	<div infinite-scroll="ml.nextPage()"\n' +
    '      infinite-scroll-distance="0"\n' +
    '      infinite-scroll-immediate-check="false">\n' +
    '		<div class="col-md-12 merchant-list" ng-repeat="(key, value) in ml.merchant.list">\n' +
    '	        <div class="col-sm-3 col-md-2"><img class="img-responsive" src="{{value.photo}}"></div>\n' +
    '	        <div class="col-sm-9 col-md-8">\n' +
    '	           <h2>{{value.business_name}}</h2>\n' +
    '	           <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '	           <p> {{value.street_address}}, {{value.region}}, {{value.city}},<br>{{value.state}} {{value.zipcode}}, {{value.country}} \n' +
    '	           </p>\n' +
    '	        </div>\n' +
    '	        <a href="#/admin/merchant/edit/{{value.id}}" class="edit"><i class="fa fa-pencil"></i></a>\n' +
    '	        <a href="#" ng-click="ml.deleteMerchant($event, value.id)" class="delete"><i class="fa fa-trash"></i></a>\n' +
    '	        <div class="clearfix"></div>\n' +
    '	    </div>\n' +
    '    </div>\n' +
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
    '            <a href="#" class="btn join"  ng-click="nav.openSignUpModal($event)">Join Now !!</a>\n' +
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
    '	        <uib-carousel interval="home.myInterval" no-wrap="home.noWrap" active="home.active" no-transition="home.noTransition" no-pause="home.noPause">\n' +
    '		        <uib-slide ng-repeat="slide in home.slides" active="slide.active" index="slide.id">\n' +
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
  $templateCache.put('html/tab-template-merchant.html',
    '<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n' +
    '	<a href ng-click="select()" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n' +
    '</li>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('html/tabset-template-merchant.html',
    '<div class="menu-detail-wrap">\n' +
    '	<div class="col-md-4 menu-items">\n' +
    '		<ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n' +
    '	</div>\n' +
    '	<div class="tab-content col-md-8 popular-items">\n' +
    '	  <div class="tab-pane"\n' +
    '	       ng-repeat="tab in tabset.tabs"\n' +
    '	       ng-class="{active: tabset.active === tab.index}"\n' +
    '	       uib-tab-content-transclude="tab">\n' +
    '	  </div>\n' +
    '	</div>\n' +
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
  $templateCache.put('merchant/merchant-landing.html',
    '<div class="container merchant-landing">\n' +
    '   <div class="col-md-12 product-detail">\n' +
    '      <div class="col-sm-3 col-md-2"><img class="img-responsive" ng-src="mlc.data.merchant.photo"></div>\n' +
    '      <div class="col-sm-9 col-md-8">\n' +
    '         <h2>{{mlc.data.merchant.business_name}}</h2>\n' +
    '         <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '         <p> {{mlc.data.merchant.contact.address_1}}, <br/>{{mlc.data.merchant.contact.city}},<br/>\n' +
    '            {{mlc.data.merchant.region}} {{mlc.data.merchant.contact.zip_code}}, <br/>{{mlc.data.merchant.contact.country}} \n' +
    '         </p>\n' +
    '      </div>\n' +
    '      <a ng-click="nav.go(\'user.profile\')" class="edit"><i class="fa fa-pencil"></i></a>\n' +
    '      <div class="clearfix"></div>\n' +
    '   </div>\n' +
    '   <div class="col-md-12 merchant-detail">\n' +
    '      <div class="row">\n' +
    '         <div class="col-md-12 order-status">\n' +
    '            <div class="table-responsive">\n' +
    '               <ul class="nav nav-tabs">\n' +
    '                  <li ng-class="{active: mlc.data.active == \'order\'}"><a ng-click="mlc.go(\'merchant.order\', \'order\')">In-progress / Ready for pick up</a></li>\n' +
    '                  <li ng-class="{active: mlc.data.active == \'pastorder\'}"><a ng-click="mlc.go(\'merchant.pastorder\', \'past\')">Past orders</a></li>\n' +
    '                  <li ng-class="{active: mlc.data.active == \'review\'}"><a ng-click="mlc.go(\'merchant.review\', \'review\')">Reviews</a></li>\n' +
    '                  <li ng-class="{active: mlc.data.active == \'menu\'}"><a ng-click="mlc.go(\'merchant.menu\', \'menu\')">Merchant Menu</a></li>\n' +
    '               </ul>\n' +
    '               <div ui-view="merchant-landing"></div> \n' +
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
  $templateCache.put('merchant/merchant-menu.html',
    '<div id="mer-info" infinite-scroll="mmc.nextPage()"\n' +
    '      infinite-scroll-distance="0"\n' +
    '      infinite-scroll-immediate-check="false">\n' +
    '	<a href="#" class="add-btn-1"><i class="fa fa-plus"></i>Add</a>\n' +
    '   <a href="#" class="add-btn-2"><i class="fa fa-plus"></i>Add</a>\n' +
    '   <table class="table">\n' +
    '      <thead>\n' +
    '         <tr> \n' +
    '            <th>Item</th>\n' +
    '            <th>Item Short Description</th>\n' +
    '            <th>Item Long Description</th>\n' +
    '            <th>Item Category</th>\n' +
    '            <th>Item Add Ons</th>\n' +
    '            <th>Item Price</th>\n' +
    '            <th>Edit </th>\n' +
    '            <th>Upload Image</th>\n' +
    '         </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '         <tr ng-repeat="menu in mmc.data.menu">\n' +
    '            <td>{{menu.item_name}}</td>\n' +
    '            <td>{{menu.description}}</td>\n' +
    '            <td>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</td>\n' +
    '            <td>{{menu.category_name}}</td>\n' +
    '            <td>Lorem ipsum </td>\n' +
    '            <td>{{menu.price}}</td>\n' +
    '            <td><a href="#/mercant/menu/{{menu.item_id}}/{{menu.category_id}}" class="edit"><i class="fa fa-pencil"></i></a> </td>\n' +
    '            <td><a href="#">Lorem ipsum.jpg</a> </td>\n' +
    '         </tr>\n' +
    '      </tbody>\n' +
    '   </table>\n' +
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
  $templateCache.put('merchant/merchant-order.html',
    '<div id="mer-in-progress">\n' +
    '                           <table class="table">\n' +
    '                              <thead>\n' +
    '                                 <tr>\n' +
    '                                    <th>Order ID</th>\n' +
    '                                    <th>Order</th>\n' +
    '                                    <th>Time Remaining</th>\n' +
    '                                    <th>Current Status</th>\n' +
    '                                    <th>Change state</th>\n' +
    '                                 </tr>\n' +
    '                              </thead>\n' +
    '                              <tbody>\n' +
    '                                 <tr>\n' +
    '                                    <td><a class="orderid" href="shopping-cart-summary.html">4269-2215</a></td>\n' +
    '                                    <td>2. Lorem ipsum dolor\n' +
    '                                       sit amet \n' +
    '                                    </td>\n' +
    '                                    <td>30 mnts</td>\n' +
    '                                    <td>\n' +
    '                                       <a class="ready-pick" href="#">\n' +
    '                                          Ready for pick-up\n' +
    '                                    </td>\n' +
    '                                    <td><a class="btn btn-complete btn-block">Complete</a></td>\n' +
    '                                 </tr>\n' +
    '                                 <tr>\n' +
    '                                    <td><a class="orderid" href="shopping-cart-summary.html">4269-2215</a></td>\n' +
    '                                    <td>\n' +
    '                                       <ol>\n' +
    '                                          <li>Lorem ipsum dolor sit amet</li>\n' +
    '                                          <li>Lorem ipsum dolor sit amet</li>\n' +
    '                                       </ol>\n' +
    '                                    </td>\n' +
    '                                    <td>30 mnts</td>\n' +
    '                                    <td><a href="#" class="in-progress">In progress</a></td>\n' +
    '                                    <td><a class="btn btn-ready-for-pick btn-block" href="#">Ready for pick up</a></td>\n' +
    '                                 </tr>\n' +
    '                                 <tr>\n' +
    '                                    <td><a class="orderid" href="shopping-cart-summary.html">4269-2215</a></td>\n' +
    '                                    <td>2. Lorem ipsum dolor\n' +
    '                                       sit amet \n' +
    '                                    </td>\n' +
    '                                    <td>30 mnts</td>\n' +
    '                                    <td>\n' +
    '                                       <a class="ready-pick" href="#">\n' +
    '                                          Ready for pick-up\n' +
    '                                    </td>\n' +
    '                                    <td><a class="btn btn-complete btn-block">Complete</a></td>\n' +
    '                                 </tr>\n' +
    '                              </tbody>\n' +
    '                           </table>\n' +
    '                        </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('merchant/merchant-review.html',
    '<div id="mer-review">\n' +
    '                           <table class="table">\n' +
    '                              <thead>\n' +
    '                                 <tr>\n' +
    '                                    <th>Name</th>\n' +
    '                                    <th>Rating </th>\n' +
    '\n' +
    '                                 </tr>\n' +
    '                              </thead>\n' +
    '                              <tbody>\n' +
    '                                 <tr>\n' +
    '                                    <td>David</td>\n' +
    '                                    <td><div class="rating"><span class="pull-left"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '              <div class="clearfix"></div>\n' +
    '            </div></td>\n' +
    '                                   \n' +
    '                                 </tr>\n' +
    '                                 <tr>\n' +
    '                                    <td>John</td>\n' +
    '                                    <td><div class="rating"><span class="pull-left"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>\n' +
    '              <div class="clearfix"></div>\n' +
    '            </div></td>\n' +
    '                                    \n' +
    '                                 </tr>\n' +
    '                                 <tr>\n' +
    '                                    <td>Peter james</td>\n' +
    '                                    <td><div class="rating"><span class="pull-left"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>\n' +
    '              <div class="clearfix"></div>\n' +
    '            </div></td>\n' +
    '                                  \n' +
    '                                 </tr>\n' +
    '                              </tbody>\n' +
    '                           </table>\n' +
    '                        </div>');
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
    '      <input ng-model="sbc.searchCriteria.location" type="text" placeholder="Location" uib-typeahead="address as address.city_region_name for address in sbc.getLocation($viewValue)" typeahead-loading="loadingLocations" typeahead-no-results="noLocations" class="form-control" typeahead-on-select="sbc.onSelectRegion($item, $modal, $label, $event)"/>\n' +
    '      <i ng-show="loadingLocations" class="glyphicon glyphicon-refresh"></i>\n' +
    '      <div ng-show="noLocations">\n' +
    '        <i class="glyphicon glyphicon-remove"></i> No Results Found\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-5 less-padding">\n' +
    '      <input type="text" class="form-control" ng-disabled="!sbc.isLocation" ng-model="sbc.searchCriteria.keyword" placeholder="Keyword" uib-typeahead="keyword as keyword.category for keyword in sbc.getKeywords($viewValue)" typeahead-loading="loadingKeywords" typeahead-no-results="noKeywords" class="form-control" typeahead-on-select="sbc.onSelectKeyword($item, $modal, $label, $event)"/>\n' +
    '      <i ng-show="loadingKeywords" class="glyphicon glyphicon-refresh"></i>\n' +
    '      <div ng-show="noKeywords">\n' +
    '        <i class="glyphicon glyphicon-remove"></i> No Results Found\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-2 less-padding"><a ng-disabled="!sbc.isLocation" class="btn btn-block" ng-click="sbc.searchFn($event)"><i class="fa fa-search"></i> Search</a></div>\n' +
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
    '        <a href="#" class="btn join"  ng-click="vm.openSignUpModal($event)">Join Now !!</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="container-fluid search-wrap" ui-view="search-box">\n' +
    '</div>\n' +
    '<div class="container search-result">\n' +
    '  <div class="col-md-12 best-bet">These retailers are your best bet for:<a href="#">{{sc.keyword}}</a></div>\n' +
    '  <div class="row-fluid">\n' +
    '    <div class="col-md-12">\n' +
    '      <div class="list-wrap" infinite-scroll="sc.nextPage()"\n' +
    '      infinite-scroll-distance="0"\n' +
    '      infinite-scroll-immediate-check="false">\n' +
    '        <div class="list-item" ng-repeat="(key, value) in sc.merchant.list">\n' +
    '          <div class="col-xs-12 col-sm-8 col-md-8" >\n' +
    '            <h2><a href="shop-detail-menu.html">{{value.business_name}}</a></h2>\n' +
    '            <img src="{{value.photo}}" class="pull-left" />\n' +
    '            <div> <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '              <p>0.98 mi Distance from search location</p>\n' +
    '              <p class="wait">{{value.avg_wait_time}} Wait Time</p>\n' +
    '              <p>Open {{value.open_time}} to {{value.close_time}}</p>\n' +
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
    '            <a ng-click="sc.viewMerchant(value.id)" class="btn btn-block">View Retailer</a></div>\n' +
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
    '  <div class="shop-detail" ng-if="sdm.nest.merchantId">\n' +
    '    <div class="col-sm-6 col-md-4"> <img src="{{sdm.nest.merchantDetail.photo}}" class="img-responsive"/> </div>\n' +
    '    <div class="col-sm-6 col-md-3 info">\n' +
    '      <h2>{{sdm.nest.merchantDetail.business_name}}</h2>\n' +
    '	    <p><a href="{{sdm.nest.merchantDetail.website}}" target="_blank">{{sdm.nest.merchantDetail.website}}</a></p>\n' +
    '      <p> {{sdm.nest.merchantDetail.contact_details.address_1}} {{sdm.nest.merchantDetail.contact_details.city}}<br/>\n' +
    '        {{sdm.nest.merchantDetail.contact_details.state}} {{sdm.nest.merchantDetail.contact_details.zip_code}} {{sdm.nest.merchantDetail.contact_details.country}} </p>\n' +
    '      <span class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>\n' +
    '      <p>0.98 mi Distance from search location</p>\n' +
    '      <p>{{sdm.nest.merchantDetail.avg_waiting_time}} Wait Time</p>\n' +
    '      <p>Open {{sdm.nest.merchantDetail.open_time}} to {{sdm.nest.merchantDetail.close_time}}</p>\n' +
    '    </div>\n' +
    '    <div class="col-sm-12 col-md-5 location"> <img src="img/shop-map.jpg" class="img-responsive"/> </div>\n' +
    '    <div class="clearfix"></div>\n' +
    '  </div>\n' +
    '  <div ng-if="sdm.nest.merchantId">\n' +
    '    <div class="menu-detail-wrap">\n' +
    '        <div class="col-md-4 menu-items">\n' +
    '          <h2>Category</h2>\n' +
    '        </div>\n' +
    '        <div class="col-md-8 popular-items">\n' +
    '          <h2>Detailed Items</h2>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <uib-tabset vertical="true" type="tabs" template-url="html/tabset-template-merchant.html">\n' +
    '      <uib-tab select="sdm.getMenuByMandC(category.id)" ng-repeat="category in sdm.nest.merchantDetail.categories" active="$index == 0" template-url="html/tab-template-merchant.html">\n' +
    '        <uib-tab-heading>\n' +
    '            <img src="img/ic-menuitem.png" />{{category.category_name}}\n' +
    '        </uib-tab-heading>\n' +
    '        <div class="tab-pane">\n' +
    '          <div class="row-fluid">\n' +
    '            <div ng-repeat="menu in category.menu_items" class="col-sm-6 col-md-6 item-left">\n' +
    '              <div class="row list">\n' +
    '                <div class="col-xs-9 col-sm-8 col-md-9"> <img src="{{menu.picture}}" class="pull-left" />\n' +
    '                  <div class="content">\n' +
    '                    <h3><a href="#" data-toggle="modal" data-target="#menu-detail">{{menu.item_name}}</a></h3>\n' +
    '                    <p>{{menu.description}}</p>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '                <div class="col-xs-3 col-sm-4 col-md-3"> <a title="Add to cart" href="#" data-toggle="modal" data-target="#menu-detail"><i class="fa fa-shopping-cart fa-lg"></i></a> <span class="price">${{menu.price}}</span> </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </uib-tab>\n' +
    '    </uib-tabset>\n' +
    '  </div>\n' +
    '  <div class="clearfix clear"></div>\n' +
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
    '            	<textarea name="address_1" ng-model="vm.profile.contact.address_1" class="form-control"  placeholder="Address"></textarea>\n' +
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
    '                  <option value="Tamilnadu">tamil nadu</option>\n' +
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

(function(module) {
try {
  module = angular.module('litewait.ui');
} catch (e) {
  module = angular.module('litewait.ui', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/verify-email.html',
    '<div class="container">\n' +
    '	<h1>Email Verification:</h1>\n' +
    '	<div class="alert" ng-class="{\'alert-success\': !vusr.data.error, \'alert-danger\': vusr.data.error}">{{vusr.data.message}}</div>\n' +
    '	<div class="text-center"><a ng-click="nav.go(\'home\')" class="btn btn-default">Goto Home</a></div>\n' +
    '</div>');
}]);
})();
