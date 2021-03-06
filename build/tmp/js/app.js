/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);


/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/* =========================================================
 * bootstrap-slider.js v2.0.0
 * http://www.eyecon.ro/bootstrap-slider
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function( $ ) {

	var Slider = function(element, options) {
		this.element = $(element);
		this.picker = $('<div class="slider">'+
							'<div class="slider-track">'+
								'<div class="slider-selection"></div>'+
								'<div class="slider-handle"></div>'+
								'<div class="slider-handle"></div>'+
							'</div>'+
							'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'+
						'</div>')
							.insertBefore(this.element)
							.append(this.element);
		this.id = this.element.data('slider-id')||options.id;
		if (this.id) {
			this.picker[0].id = this.id;
		}

		if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
			this.touchCapable = true;
		}

		var tooltip = this.element.data('slider-tooltip')||options.tooltip;

		this.tooltip = this.picker.find('.tooltip');
		this.tooltipInner = this.tooltip.find('div.tooltip-inner');

		this.orientation = this.element.data('slider-orientation')||options.orientation;
		switch(this.orientation) {
			case 'vertical':
				this.picker.addClass('slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
				this.tooltip.addClass('right')[0].style.left = '100%';
				break;
			default:
				this.picker
					.addClass('slider-horizontal')
					.css('width', this.element.outerWidth());
				this.orientation = 'horizontal';
				this.stylePos = 'left';
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';
				this.tooltip.addClass('top')[0].style.top = -this.tooltip.outerHeight() - 14 + 'px';
				break;
		}

		this.min = this.element.data('slider-min')||options.min;
		this.max = this.element.data('slider-max')||options.max;
		this.step = this.element.data('slider-step')||options.step;
		this.value = this.element.data('slider-value')||options.value;
		if (this.value[1]) {
			this.range = true;
		}

		this.selection = this.element.data('slider-selection')||options.selection;
		this.selectionEl = this.picker.find('.slider-selection');
		if (this.selection === 'none') {
			this.selectionEl.addClass('hide');
		}
		this.selectionElStyle = this.selectionEl[0].style;


		this.handle1 = this.picker.find('.slider-handle:first');
		this.handle1Stype = this.handle1[0].style;
		this.handle2 = this.picker.find('.slider-handle:last');
		this.handle2Stype = this.handle2[0].style;

		var handle = this.element.data('slider-handle')||options.handle;
		switch(handle) {
			case 'round':
				this.handle1.addClass('round left-round');
				this.handle2.addClass('round');
				break
			case 'triangle':
				this.handle1.addClass('triangle');
				this.handle2.addClass('triangle');
				break
		}

		if (this.range) {
			this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
			this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
		} else {
			this.value = [ Math.max(this.min, Math.min(this.max, this.value))];
			this.handle2.addClass('hide');
			if (this.selection == 'after') {
				this.value[1] = this.max;
			} else {
				this.value[1] = this.min;
			}
		}
		this.diff = this.max - this.min;
		this.percentage = [
			(this.value[0]-this.min)*100/this.diff,
			(this.value[1]-this.min)*100/this.diff,
			this.step*100/this.diff
		];

		this.offset = this.picker.offset();
		this.size = this.picker[0][this.sizePos];

		this.formater = options.formater;

		this.layout();

		if (this.touchCapable) {
			// Touch: Bind touch events:
			this.picker.on({
				touchstart: $.proxy(this.mousedown, this)
			});
		} else {
			this.picker.on({
				mousedown: $.proxy(this.mousedown, this)
			});
		}

		if (tooltip === 'show') {
			this.picker.on({
				mouseenter: $.proxy(this.showTooltip, this),
				mouseleave: $.proxy(this.hideTooltip, this)
			});
		} else {
			this.tooltip.addClass('hide');
		}
	};

	Slider.prototype = {
		constructor: Slider,

		over: false,
		inDrag: false,
		
		showTooltip: function(){
			this.tooltip.addClass('in');
			//var left = Math.round(this.percent*this.width);
			//this.tooltip.css('left', left - this.tooltip.outerWidth()/2);
			this.over = true;
		},
		
		hideTooltip: function(){
			if (this.inDrag === false) {
				this.tooltip.removeClass('in');
			}
			this.over = false;
		},

		layout: function(){
			this.handle1Stype[this.stylePos] = this.percentage[0]+'%';
			this.handle2Stype[this.stylePos] = this.percentage[1]+'%';
			if (this.orientation == 'vertical') {
				this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) +'%';
				this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) +'%';
			} else {
				this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) +'%';
				this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) +'%';
			}
			if (this.range) {
				this.tooltipInner.text(
					this.formater(this.value[0]) + 
					' : ' + 
					this.formater(this.value[1])
				);
				this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0])/2)/100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight()/2 : this.tooltip.outerWidth()/2) +'px';
			} else {
				this.tooltipInner.text(
					this.formater(this.value[0])
				);
				this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0]/100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight()/2 : this.tooltip.outerWidth()/2) +'px';
			}
		},

		mousedown: function(ev) {

			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchstart') {
				ev = ev.originalEvent;
			}

			this.offset = this.picker.offset();
			this.size = this.picker[0][this.sizePos];

			var percentage = this.getPercentage(ev);

			if (this.range) {
				var diff1 = Math.abs(this.percentage[0] - percentage);
				var diff2 = Math.abs(this.percentage[1] - percentage);
				this.dragged = (diff1 < diff2) ? 0 : 1;
			} else {
				this.dragged = 0;
			}

			this.percentage[this.dragged] = percentage;
			this.layout();

			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).on({
					touchmove: $.proxy(this.mousemove, this),
					touchend: $.proxy(this.mouseup, this)
				});
			} else {
				$(document).on({
					mousemove: $.proxy(this.mousemove, this),
					mouseup: $.proxy(this.mouseup, this)
				});
			}

			this.inDrag = true;
			var val = this.calculateValue();
			this.element.trigger({
					type: 'slideStart',
					value: val
				}).trigger({
					type: 'slide',
					value: val
				});
			return false;
		},

		mousemove: function(ev) {
			
			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchmove') {
				ev = ev.originalEvent;
			}

			var percentage = this.getPercentage(ev);
			if (this.range) {
				if (this.dragged === 0 && this.percentage[1] < percentage) {
					this.percentage[0] = this.percentage[1];
					this.dragged = 1;
				} else if (this.dragged === 1 && this.percentage[0] > percentage) {
					this.percentage[1] = this.percentage[0];
					this.dragged = 0;
				}
			}
			this.percentage[this.dragged] = percentage;
			this.layout();
			var val = this.calculateValue();
			this.element
				.trigger({
					type: 'slide',
					value: val
				})
				.data('value', val)
				.prop('value', val);
			return false;
		},

		mouseup: function(ev) {
			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).off({
					touchmove: this.mousemove,
					touchend: this.mouseup
				});
			} else {
				$(document).off({
					mousemove: this.mousemove,
					mouseup: this.mouseup
				});
			}

			this.inDrag = false;
			if (this.over == false) {
				this.hideTooltip();
			}
			this.element;
			var val = this.calculateValue();
			this.element
				.trigger({
					type: 'slideStop',
					value: val
				})
				.data('value', val)
				.prop('value', val);
			return false;
		},

		calculateValue: function() {
			var val;
			if (this.range) {
				val = [
					(this.min + Math.round((this.diff * this.percentage[0]/100)/this.step)*this.step),
					(this.min + Math.round((this.diff * this.percentage[1]/100)/this.step)*this.step)
				];
				this.value = val;
			} else {
				val = (this.min + Math.round((this.diff * this.percentage[0]/100)/this.step)*this.step);
				this.value = [val, this.value[1]];
			}
			return val;
		},

		getPercentage: function(ev) {
			if (this.touchCapable) {
				ev = ev.touches[0];
			}
			var percentage = (ev[this.mousePos] - this.offset[this.stylePos])*100/this.size;
			percentage = Math.round(percentage/this.percentage[2])*this.percentage[2];
			return Math.max(0, Math.min(100, percentage));
		},

		getValue: function() {
			if (this.range) {
				return this.value;
			}
			return this.value[0];
		},

		setValue: function(val) {
			this.value = val;

			if (this.range) {
				this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
				this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
			} else {
				this.value = [ Math.max(this.min, Math.min(this.max, this.value))];
				this.handle2.addClass('hide');
				if (this.selection == 'after') {
					this.value[1] = this.max;
				} else {
					this.value[1] = this.min;
				}
			}
			this.diff = this.max - this.min;
			this.percentage = [
				(this.value[0]-this.min)*100/this.diff,
				(this.value[1]-this.min)*100/this.diff,
				this.step*100/this.diff
			];
			this.layout();
		}
	};

	$.fn.slider = function ( option, val ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('slider'),
				options = typeof option === 'object' && option;
			if (!data)  {
				$this.data('slider', (data = new Slider(this, $.extend({}, $.fn.slider.defaults,options))));
			}
			if (typeof option == 'string') {
				data[option](val);
			}
		})
	};

	$.fn.slider.defaults = {
		min: 0,
		max: 10,
		step: 1,
		orientation: 'horizontal',
		value: 5,
		selection: 'before',
		tooltip: 'show',
		handle: 'round',
		formater: function(value) {
			return value;
		}
	};

	$.fn.slider.Constructor = Slider;

}( window.jQuery );
;(function(angular){
	'use strict';	

	angular.module('litewait.services', []);
	angular.module('litewait.directives', ['ngMessages', 'ngTagsInput']);
	angular.module('litewait.ui', ['ui.bootstrap', 'litewait.directives', 'cgBusy', 'toaster', 'infinite-scroll', 'satellizer']);
	angular.module('litewait', ['ui.router', 'litewait.services', 'litewait.ui']);

})(angular);

/**
 * 
 */
(function () {
    "use strict";
    var app = angular.module('litewait');

    var apiBase = 'http://litewait-sandbox.herokuapp.com/v1.0/rest';

    app.value('RouteConfig', {
        base: '/',
        apiBase: apiBase,
        properties: {
            all: ''
        }
    });

    app.run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (_0, _1, _2, _3, _4, error) {
            if (error) {
                $state.go('home');
            }
        });

        //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            //console.log(arguments);
        //});
    });

    app.config(function ($httpProvider, $authProvider) {
        $httpProvider.useApplyAsync(true);

        $authProvider.facebook({
            name: 'facebook',
            url: '/auth/facebook',
            authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
            redirectUri: window.location.origin + '/',
            clientId: '1558123447850269',
            responseType: 'token'
        });

        $authProvider.google({
            name: 'google',
            url: '/auth/google',
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
            redirectUri: window.location.origin,
            clientId: '165165136801-696aje3s6hs717to99umig0j0a05oaf8.apps.googleusercontent.com',
            responseType: 'token'
        });
    });

})();


;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
            	url: "",
                views: {
                    "search-box@home": {
                      templateUrl: 'navigation/search-box.html',
                      controller: "SearchBoxCtrl",
                      controllerAs: "sbc"
                    },
                    "@": {
                        templateUrl: "home/home.html",
                        controller: "HomeCtrl",
                        controllerAs: "home"
                    }
                },
                params: { location: '', keyword: '' },
                resolve: {
                    srch: function ($q, $timeout) {
                        var deferred = $q.defer();

                        var handler = $timeout(function() {
                            deferred.resolve('home');
                            $timeout.cancel(handler);
                        }, 0);

                        return deferred.promise;
                    },
                    geolocation: function ($q, Search, $timeout, Location) {
                        var loc = {};
                        var deferred = $q.defer();

                        var handler = $timeout(function() {
                            Search.getRegionByGeo().then(function(response) {
                                if (!response.data.error) {
                                    Location.status = loc.status = true;
                                    Location.data = loc.data = response.data.data;
                                    deferred.resolve(loc);
                                } else {
                                    getByIp();
                                }
                            }, function(error) {
                                getByIp();
                            });

                            function getByIp() {
                                Search.getRegionByIP().then(function(res) {
                                    if (res.length) {
                                        Location.status = loc.status = true;
                                        Location.data = loc.data = res.data.data;
                                        deferred.resolve(loc);
                                    } else {
                                        Location.status = loc.status = false;
                                        Location.data = loc.data = null;
                                        deferred.resolve(loc);
                                    }
                                }, function() {
                                    Location.status = loc.status = false;
                                    Location.data = loc.data = null;
                                    deferred.resolve(loc);
                                });
                            }

                            $timeout.cancel(handler);
                        }, 0);
                        return deferred.promise;
                    },
                    authentication: function (User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            return true;
                        }
                        if (User.isLoggedIn && User.role == 'm') {
                            var handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('merchant');
                            }, 0);
                        }
                    }
                }
            });
    }
})(angular);

/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantCreateCtrl', MerchantCreateCtrl);

	angular.$inject = ['$scope', 'Merchant', 'merchant', 'toaster', 'GeoService', 'MSG'];

	function MerchantCreateCtrl($scope, Merchant, merchant, toaster, GeoService, MSG) {
		var vm = this;
		vm.type = merchant ? 'Edit' : 'Add';
		vm.data = {
			geo: {
				country: {name: '', id: ''},
				state: {name: '', id: ''},
				city: {name: '', id: ''}
			}
		};
		vm.merchant = {
			id: '',
			password: '',
			business_name: '',
			business_type: '',
			contact_person: '',
			username: '',
			contact: {
				address_1: '',
				phone: '',
				city: '',
				state: '',
				country: '',
				cityId: '',
				stateId: '',
				countryId: '',
				zip_code: '',
				mail_id: ''
			},
			region: '',
			region_id: '',
			city: '',
			city_id: '',
			photo: '',
			website: '',
			open_time: '',
			close_time: '',
			avg_waiting_time: '',
			is_active: 'N'
		};

		vm.updateMerchant = updateMerchant;
		vm.assignMerchant = assignMerchant;
		vm.cancel = cancel;
		vm.getCountries = getCountries;
		vm.getStates = getStates;
		vm.getCities = getCities;
		vm.onSelectCountry = onSelectCountry;
		vm.onSelectState = onSelectState;
		vm.onSelectCity = onSelectCity;

		function onSelectCountry() {
			vm.merchant.contact.country = vm.data.geo.country.name;
			vm.merchant.contact.countryId = vm.data.geo.country.id;
		}

		function onSelectState() {
			vm.merchant.contact.state = vm.data.geo.state.name;
			vm.merchant.contact.stateId = vm.data.geo.state.id;
		}

		function onSelectCity() {
			vm.merchant.contact.city = vm.data.geo.city.name;
			vm.merchant.contact.cityId = vm.data.geo.city.id;
		}

		function getCountries(str) {
			return GeoService.getCountries(str).then(function(res) {
				var a = [];
				if (!res.data.error && res.data.data !== null) {
					for (var i=0;i<res.data.data.length;i++) {
						a.push({
							id: res.data.data[i].id,
							name: res.data.data[i].name
						});
					}
					return a;
				}
				return [];
			});
		}

		function getStates(str) {
			if (vm.merchant.contact.country) {
				var params = {
					search: str,
					country: vm.data.geo.country.name
				};

				return GeoService.getStates(params).then(function(res) {
					var a = [];
					if (!res.data.error && res.data.data !== null) {
						for (var i=0;i<res.data.data.length;i++) {
							a.push({
								id: res.data.data[i].id,
								name: res.data.data[i].name
							});
						}
						return a;
					}
					return [];
				});
			}
			return [];
		}

		function getCities(str) {
			if (vm.merchant.contact.state) {
				var params = {
					search: str,
					country: vm.data.geo.country.name,
					state: vm.data.geo.state.name
				};

				return GeoService.getCities(params).then(function(res) {
					var a = [];
					if (!res.data.error && res.data.data !== null) {
						for (var i=0;i<res.data.data.length;i++) {
							a.push({
								id: res.data.data[i].city_name,
								name: res.data.data[i].city_name
							});
						}
						return a;
					}
					return [];
				});
			}
			return [];
		}

		function updateMerchant(valid, data) {
			if (valid) {
				var params = angular.copy(data);
				var action;
				if (vm.merchant.id) {
					action = Merchant.update;
				} else {
					action = Merchant.add;
					delete params.id;
				}
				action(params).then(function(response) {
					if (!(response.error)) {
						toaster.pop({
                            type: 'success', 
                            title:'Success', 
                            body: MSG.merchantUpdateSuccess, 
                            toasterId: 1
                        });
					} else {
						toaster.pop({
                            type: 'error', 
                            title:'Error', 
                            body: MSG.merchantUpdateFailed, 
                            toasterId: 1
                        });
					}
				});
			}
		}

		function assignMerchant() {
			if (merchant) {
				vm.merchant.id = merchant.data.id;
				vm.merchant.password = '';
				vm.merchant.username = merchant.data.username;
				vm.merchant.business_name = merchant.data.business_name;
				vm.merchant.business_type = merchant.data.business_type;
				vm.merchant.contact_person = merchant.data.contact_person;
								
				if (merchant.data.contact !== null) {
					vm.merchant.contact.address_1 = merchant.data.contact.address_1;
					vm.merchant.contact.phone = merchant.data.contact.phone;
					vm.data.geo.city.name = vm.merchant.contact.city = merchant.data.contact.city || '';
					vm.data.geo.state.name = vm.merchant.contact.state = merchant.data.contact.state || '';
					vm.data.geo.country.name = vm.merchant.contact.country = merchant.data.contact.country || '';
					vm.data.geo.city.id = vm.merchant.contact.cityId = merchant.data.contact.cityId || '';
					vm.data.geo.state.id = vm.merchant.contact.stateId = merchant.data.contact.stateId || '';
					vm.data.geo.country.id = vm.merchant.contact.countryId = merchant.data.contact.countryId || '';
					vm.merchant.contact.zip_code = merchant.data.contact.zip_code;
					vm.merchant.contact.mail_id = merchant.data.contact.mail_id;
				}

				vm.merchant.region = merchant.data.region;
				vm.merchant.region_id = merchant.data.region_id;
				vm.merchant.city = merchant.data.city;
				vm.merchant.city_id = merchant.data.city_id;
				vm.merchant.open_time = merchant.data.open_time;
				vm.merchant.close_time = merchant.data.close_time;
				vm.merchant.avg_waiting_time = merchant.data.avg_waiting_time;
				vm.merchant.photo = merchant.data.photo;
				vm.merchant.website = merchant.data.website;
				vm.merchant.is_active = merchant.data.is_active;
			}
		}

		function cancel(event) {
			event.preventDefault();
			$state.go('home');
		}

		assignMerchant();
	}
})(angular);
/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantListCtrl', MerchantListCtrl);

	angular.$inject = ['$scope', 'Merchant', '$window', 'AUTH_MSG'];

	function MerchantListCtrl($scope, Merchant, $window, AUTH_MSG) {
		var vm = this;
		vm.merchant = {
			list: [],
			busy: false,
			offset: 0,
			limit: 20,
			totalRecords: 0,
			keyword: ''
		};
		vm.initializeMerchant = initializeMerchant;
		vm.nextPage = nextPage;
		vm.deleteMerchant = deleteMerchant;

		function deleteMerchant(event, id) {
			event.preventDefault();
			var confirm = $window.confirm('Are you sure to want to delete?');
			if (confirm) {
				Merchant.deleteMerchant(id).then(function(response) {
					if (!response.error) {
						toaster.pop({
	                        type: 'success', 
	                        title:'Success', 
	                        body: AUTH_MSG.merchantDeleteSuccess, 
	                        toasterId: 1
	                    });
					} else {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: AUTH_MSG.merchantDeleteFailed, 
	                        toasterId: 1
	                    });
					}
				}, function(error) {
					toaster.pop({
	                    type: 'error', 
	                    title:'Error', 
	                    body: AUTH_MSG.merchantDeleteFailed, 
	                    toasterId: 1
	                });
				});
			}
		}

		function searchMerchant() {
			var obj = getMerchantParams();
			Merchant.getList(obj).then(function(response) {
				assignMerchants(response.merchants);
				vm.merchant.busy = false;
			}, function() {
				vm.merchant.busy = false;
			});
		}

        function assignMerchants(items) {
          for (var i = 0; i < items.length; i++) {
            var index = _.findIndex(vm.merchant.list, {id: items[i].id});
            if (-1 === index) {
            	var data = items[i];
            	var addrArr = [];
            	var addrArr1 = [];
            	if (data.contact !== null) {
            		if (data.contact.address_1) {
            			addrArr.push(data.contact.address_1);
            		}
            		if (data.region) {
            			addrArr.push(data.region);
            		}
            		if (data.contact.city) {
            			addrArr.push(data.contact.city);
            		}
            		if (data.contact.state) {
            			addrArr1.push(data.contact.state);
            		}
            		if (data.contact.zip_code) {
            			addrArr1.push(data.contact.zip_code);
            		}
            		if (data.contact.country) {
            			addrArr1.push(data.contact.country);
            		}
            	}

            	data.addr_line_1 = addrArr.join(', ');
            	data.addr_line_2 = addrArr1.join(', ');
              	vm.merchant.list.push(data);
            }
          }
          vm.merchant.offset = vm.merchant.list.length;
          vm.merchant.busy = false;
        }

        function getMerchantParams() {
        	var page_no = parseInt(vm.merchant.offset/vm.merchant.limit) + 1;
          	return {
				page_no: page_no,
				page_size: vm.merchant.limit,
				search: vm.merchant.keyword
			};
        }

        function initializeMerchant() {
          vm.merchant.offset = 1;
          vm.merchant.list.length = 0;
          searchMerchant();
        }

        function nextPage() {
          var params = getMerchantParams();

          if ( ! vm.merchant.busy) {
            vm.merchant.busy = true;
            searchMerchant();
          }
        }

        initializeMerchant();
	}
})(angular);

;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('admin_merchant', {
                abstract: true
            })
            .state('admin_merchant.list', {
            	url: "/admin/merchant",
                views: {
                    "@": {
                        templateUrl: "admin/merchant-list.html",
                        controller: "MerchantListCtrl",
                        controllerAs: "ml"
                    }
                }
            }).state('admin_merchant.edit', {
                url: "/admin/merchant/edit/:id",
                views: {
                    "@": {
                        templateUrl: "admin/merchant-create.html",
                        controller: "MerchantCreateCtrl",
                        controllerAs: "mcr"
                    }
                },
                resolve: {
                    merchant: function($timeout, $q, Merchant, $stateParams) {
                        if ($stateParams.id) {
                            return Merchant.get($stateParams.id).then(function(response) {
                                if (!response.data.error) {
                                    return response.data;
                                }
                                return false;
                            }).catch(function(error) {
                                return false;
                            });
                        } else {
                            return $q.when(false);
                        }
                    }
                }
            }).state('admin_merchant.new', {
                url: "/admin/merchant/new",
                views: {
                    "@": {
                        templateUrl: "admin/merchant-create.html",
                        controller: "MerchantCreateCtrl",
                        controllerAs: "mcr"
                    }
                },
                resolve: {
                    merchant: function($timeout, $q, Merchant, $stateParams) {
                        return $q.when("");
                    }
                }
            });
    }
})(angular);
/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('CartCtrl', CartCtrl);

	CartCtrl.$inject = ['$scope', 'CartService', 'User', 'PubSub', 'EVENTS', '$state', 'session'];

	function CartCtrl($scope, CartService, User, PubSub, EVENTS, $state, session) {
		var vm = this;
		vm.cart = CartService;
		vm.user = User;

		PubSub.subscribe(EVENTS.ORDER_PLACED, function(event, obj) {
			var data = obj.args;
			var time = (new Date()).getTime();
			session.setItem(time, data);
			$state.go('orderthankyou', {time: time});
		});
	}
})();

;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('cart', {
                abstract: true
            })
            .state('cart.detail', {
            	url: "/cart",
                views: {
                    "@": {
                        templateUrl: "cart/cart.html",
                        controller: "CartCtrl",
                        controllerAs: "cc"
                    }
                }
            });
    }
})(angular);
/*
*
*/
;(function() {
	'use strict';
	function checkCategoryExists(MenuService, $q) {
		return {
			restrict: 'A',
			require: 'ngModel',
			scope: {
				categoryData: '='
			},
			link: function(scope, element, attrs, ngModel) {
				ngModel.$asyncValidators.checkCategoryExists = function(value) {
					var data = scope.categoryData;
					if (data.id) {

						if (data.id === '') {
							delete data['id'];
						} else {
							data.category_id = data.id;
							delete data.id;
						}
					}
					data.category_name = value;
					return MenuService.checkCategoryExists(data).then(function(response) {
						if (!response.data.error && response.data.data != null) {
							return $q.reject(false);
						}
						return response;
					});
				};
			}
		};
	}

	checkCategoryExists.$inject = ['MenuService', '$q'];

	angular.module('litewait.directives').directive('checkCategoryExists', checkCategoryExists);
})();
/*
 *
 */
;(function (angular) {
    'use strict';

    function compareTo() {
        return {
            restrict: 'A',
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {
                 
                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };
     
                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    }
     
    angular.module('litewait.directives').directive("compareTo", compareTo);

})(angular);


;(function() {
  'use strict';

  function dateAsMs() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModelCtrl) {
        ngModelCtrl.$parsers.push(function(value){
          if (value && value.getTime) {
            return value.getTime();
          } else {
            return value;
          }
        });
      }
    };
  }

  angular.module('litewait.directives').directive("dateAsMs", dateAsMs);

})();

/**
 *
 */
 ;(function() {
 	'use strict';

	angular.module('litewait.directives')
    .directive('datepickerPopup', datepickerPopup);

    function datepickerPopup() {

        return {
            restrict: 'EA',
            require: 'ngModel',
            link: function(scope, element, attr, controller) {
              controller.$formatters.shift();
            }
        };
    }
 })();


/*
 *
 */
;(function (angular) {
    angular.module('litewait.directives').directive('slideToggle', function() {  
        return {
            restrict: 'A',      
            scope:{
                isOpen: "=slideToggle"
            },  
            link: function(scope, element, attr) {
                var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;      
                scope.$watch('isOpen', function(newVal,oldVal){
                    if(newVal !== oldVal){ 
                        element.stop().slideToggle(slideDuration);
                    }
                });
            }
        };  
    });
})(angular);
/*
 *
 */
;(function (angular) {
	'use strict';
	angular.module('litewait.ui').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$scope', 'authentication'];

	function HomeCtrl($scope, authentication) {
		var vm = this;
		vm.myInterval = 3000;
  		vm.noWrap = false;
  		vm.active = 0;
  		vm.noPause = false;
  		vm.noTransition = false;
		vm.slides = [{
			active: true,
			id: 0,
			data:[
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			}]

		},
		{
			active: false,
			id: 2,
			data:[
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			}]

		},
		{
			active: false,
			id: 1,
			data:[
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			}]

		}];
	}
})(angular);

/*
*
*/
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('MerchantCategoryCtrl', MerchantCategoryCtrl);

	MerchantCategoryCtrl.$inject = ['$state', 'MenuService', 'User', 'userrestriction'];

	function MerchantCategoryCtrl($state, MenuService, User, userrestriction) {
		var vm = this;
		vm.data = {};
		vm.data.merchant = User.data || {};
		vm.data.categoryParams = {
			busy: false,
			offset: 0,
			limit: 10,
			merchant_id: vm.data.merchant.id
		};
		vm.data.category = [];
		vm.nextPage = nextPage;
		vm.deleteCategory = deleteCategory;

		function deleteCategory(id) {
			var params = {
				merchant_id: vm.data.merchant.id,
				category_id: id
			};
			MenuService.deleteCategory(params).then(function(response){
				if (!response.data.error) {
					var index = _.findIndex(vm.data.category, {id: id});
					
					if (index !== -1) {
						delete vm.data.category[index];
						vm.data.categoryParams.offset--;
					}
					toaster.pop({
                        type: 'success', 
                        title:'Success', 
                        body: MSG.deleteCategorySuccess, 
                        toasterId: 1
                    });
				} else {
					toaster.pop({
                        type: 'error', 
                        title:'Error', 
                        body: MSG.deleteCategoryFailed, 
                        toasterId: 1
                    });
				}
			}, function(error) {
				toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: MSG.deleteCategoryFailed, 
                    toasterId: 1
                });
			});
		}

		function searchCategory() {
			var param = getCategoryParams();
			MenuService.getCategoryByMerchantId(param).then(function(res) {
				if (!res.data.error) {
					var a = [];
					for (var i = 0; i < res.data.data.item_categories.length; i++) {
						a.push({
							merchant_id: res.data.data.merchant_id,
							_id: res.data.data.id,
							id: res.data.data.item_categories[i].id,
							is_active: res.data.data.item_categories[i].is_active,
							category_name: res.data.data.item_categories[i].category_name
						});
					}
					assignCategorys(a);
				}
			});
		}

		function assignCategorys(items) {
			for (var i = 0; i < items.length; i++) {
	            var index = _.findIndex(vm.data.category, {id: items[i].id});
	            if (-1 === index) {
	              vm.data.category.push(items[i]);
	            }
	        }
	        vm.data.categoryParams.offset = vm.data.category.length;
	        vm.data.categoryParams.busy = false;
		}

		function getCategoryParams() {
			return {
				offset: vm.data.categoryParams.offset,
				limit: vm.data.categoryParams.limit,
				merchant_id: vm.data.merchant.id
			};
		}

		function initializeCategoryList() {
			vm.data.categoryParams.offset = 0;
			vm.data.categoryParams.busy = false;
			vm.data.category.length = 0;
			searchCategory();
		}

		function nextPage() {
			if (!vm.data.categoryParams.busy) {
				vm.data.categoryParams.busy = true;
				searchCategory();
			}
		}

		initializeCategoryList();
	}
})();
/*
*
*/
;(function(){
	'use strict';
	angular.module('litewait.ui').controller('NewCategoryCtrl', NewCategoryCtrl);

	NewCategoryCtrl.$inject = ['$scope', 'User', 'MenuService', '$stateParams', '$state', 'MSG', 'toaster', 'userrestriction', 'category'];

	function NewCategoryCtrl($scope, User, MenuService, $stateParams, $state, MSG, toaster, userrestriction, category) {
		var vm = this;

		vm.data = {};
		vm.data.modelOptions = {
			debounce: {
				default: 500,
				blur: 0
			}
		};
		vm.data.merchant = User.data;
		vm.data.action = ($stateParams.category_id) ? 'Update' : 'Add';
		vm.category = {
			category_id: '',
			category_name: '',
			merchant_id: User.data.id
		};
		vm.addCategory = addCategory;
		vm.cancel = cancel;

		if (category) {
			vm.category.category_name = category.category_name;
			vm.category.category_id = category.id;
		}

		function cancel(event) {
			event.preventDefault();
			$state.go('merchant.category');
		}

		function addCategory(valid, data) {
			if (valid) {
				var action = (vm.data.action=='Update') ? MenuService.updateCategory : MenuService.addCategory;
				var smsg = vm.data.action == 'Add' ? MSG.addCategorySuccess : MSG.updateCategorySuccess;
				var fmsg = vm.data.action == 'Add' ? MSG.addCategoryFailed : MSG.updateCategoryFailed;
				var params = {
					merchant_id: vm.data.merchant.id,
					category_name: data.category_name
				};

				if (vm.data.action === 'Update' && vm.category.category_id !== '') {
					params.category_id = vm.category.category_id;
				}

				action(params).then(function(response) {
					if ( ! response.data.error) {
						toaster.pop({
	                        type: 'success', 
	                        title:'Success', 
	                        body: smsg, 
	                        toasterId: 1
	                    });
	                    $state.go('merchant.category');
					} else {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: fmsg, 
	                        toasterId: 1
	                    });
					}
				}, function(err) {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: fmsg, 
	                        toasterId: 1
	                    });
				});
			}
		}
	}
})();
/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantLandingCtrl', MerchantLandingCtrl);

	MerchantLandingCtrl.$inject = ['$scope', 'User', '$state', 'userrestriction'];

	function MerchantLandingCtrl($scope, User, $state, userrestriction) {
		var vm = this;
		vm.data = {};
		vm.data.active = $state.current.url.replace('/', '');
		vm.data['merchant'] = User.data || {};

		vm.go = go;

		function go(stateName, linkName) {
			vm.data.active = linkName;
			$state.go(stateName);
		}
	}
})(angular);
/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantMenuCtrl', MerchantMenuCtrl);

	MerchantMenuCtrl.$inject = ['$scope', 'User', 'MenuService', 'userrestriction'];

	function MerchantMenuCtrl($scope, User, MenuService, userrestriction) {
		var vm = this;
		vm.data = {};
		vm.data.merchant = User.data || {};
		vm.data.menuParams = {
			busy: false,
			offset: 0,
			limit: 10,
			merchant_id: vm.data.merchant.id
		};
		vm.data.menu = [];
		vm.nextPage = nextPage;
		vm.deleteMenu = deleteMenu;

		function searchMenu() {
			var param = getMenuParams();
			MenuService.getByMerchantId(param).then(function(res) {
				assignMenus(res);
			});
		}

		function assignMenus(items) {
			for (var i = 0; i < items.length; i++) {
	            var index = _.findIndex(vm.data.menu, {item_id: items[i].item_id});
	            if (-1 === index) {
	              vm.data.menu.push(items[i]);
	            }
	        }
	        vm.data.menuParams.offset = vm.data.menu.length;
	        vm.data.menuParams.busy = false;
		}

		function getMenuParams() {
			return {
				offset: vm.data.menuParams.offset,
				limit: vm.data.menuParams.limit,
				merchant_id: vm.data.merchant.id
			};
		}

		function initializeMenuList() {
			vm.data.menuParams.offset = 0;
			vm.data.menuParams.busy = false;
			vm.data.menu.length = 0;
			searchMenu();
		}

		function nextPage() {
			if (!vm.data.menuParams.busy) {
				vm.data.menuParams.busy = true;
				searchMenu();
			}
		}

		function deleteMenu(id) {
			var params = {
				merchant_id: vm.data.merchant.id,
				item_id: id
			};
			MenuService.deleteMenu(params).then(function(response){
				if (!response.data.error) {
					var index = _.findIndex(vm.data.menu, {item_id: id});
					
					if (index !== -1) {
						delete vm.data.menu[index];
						vm.data.menuParams.offset--;
					}

					toaster.pop({
                        type: 'success', 
                        title:'Success', 
                        body: MSG.deleteMenuSuccess, 
                        toasterId: 1
                    });
				} else {
					toaster.pop({
                        type: 'error', 
                        title:'Error', 
                        body: MSG.deleteMenuFailed, 
                        toasterId: 1
                    });
				}
			}, function(error) {
				toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: MSG.deleteMenuFailed, 
                    toasterId: 1
                });
			});
		}

		initializeMenuList();
	}
})(angular);
/*
*
*/
;(function(){
	'use strict';
	angular.module('litewait.ui').controller('NewMenuCtrl', NewMenuCtrl);

	NewMenuCtrl.$inject = ['$scope', 'User', 'MenuService', '$stateParams', '$state', 'MSG', 'toaster', '$filter', 'AddonService', 'userrestriction', 'menu'];

	function NewMenuCtrl($scope, User, MenuService, $stateParams, $state, MSG, toaster, $filter, AddonService, userrestriction, menu) {
		var vm = this;
		vm.data = {};
		vm.data.merchant = User.data;
		vm.data.action = ($stateParams.id === '') ? 'Update' : 'Add';

		vm.menu = {
			item_id: '',
			category_id: '',
			category: '',
			item_name: '',
			description: '',
			price: '',
			picture: '',
			featured: false,
			addons: [],
			merchant_id: User.data.id
		};
		vm.addMenu = addMenu;
		vm.cancel = cancel;
		vm.getCategory = getCategory;
		vm.onSelectCategory = onSelectCategory;
		vm.searchAddons = searchAddons;
		assignMenu();

		function searchAddons(query) {
			var data = {
				page_no: 1,
				page_size: 20,
				search: query
			};

			return AddonService.get(data).then(function(response) {
				if (!response.data.error && response.data.data !== null) {
					var res = response.data.data;
					var a = [];
					for(var i=0;i<res.length;i++) {
						a.push({
							name: res[i].name,
							price: res[i].price,
							picture: res[i].picture
						});
					}
					return a;
				}
				return [];
			});
		}

		function onSelectCategory() {
			vm.menu.category_id = vm.menu.category.category_id;
		}

		function getCategory(str) {
			var param = {
				merchant_id: vm.menu.merchant_id,
				offset: 0,
				limit: 20,
				search: str
			};
			return MenuService.getCategoryByMerchantId(param).then(function(res) {
				if (!res.data.error) {
					var a = [];
					for (var i = 0; i < res.data.data.item_categories.length; i++) {
						a.push({
							category_id: res.data.data.item_categories[i].id,
							category_name: res.data.data.item_categories[i].category_name
						});
					}
					return a;
				}
				return [];
			});
		}
			
		function assignMenu() {
			if (menu) {
				vm.menu.item_id = menu.item_id;
				vm.menu.category_id = menu.category_id;
				vm.menu.category = {
					category_id: menu.category_id,
					category_name: menu.category_name || ''
				};
				vm.menu.item_name = menu.item_name;
				vm.menu.description = menu.description;
				vm.menu.price = menu.price;
				vm.menu.picture = menu.picture;
				vm.menu.featured = menu.featured;
				vm.menu.addons = menu.addons || [];
			}
		}

		function cancel(event) {
			event.preventDefault();
			$state.go('merchant.menu');
		}

		function addMenu(valid, data) {
			if (valid) {
				var action = (data.id > 0) ? MenuService.update : MenuService.add;
				var smsg = vm.data.action == 'Add' ? MSG.addMenuSuccess : MSG.updateMenuSuccess;
				var fmsg = vm.data.action == 'Add' ? MSG.addMenuFailed : MSG.updateMenuFailed;
				var params = angular.copy(data);
				delete params.category;
				if (!(vm.data.action === 'Update' && data.item_id !== '')) {
					delete params.item_id;
				}

				action(params).then(function(response) {
					if ( ! response.data.error) {
						toaster.pop({
	                        type: 'success', 
	                        title:'Success', 
	                        body: smsg, 
	                        toasterId: 1
	                    });
	                    $state.go('merchant.menu');
					} else {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: fmsg, 
	                        toasterId: 1
	                    });
					}
				}, function(err) {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: fmsg, 
	                        toasterId: 1
	                    });
				});
			}
		}
	}
})();
/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantOrderCtrl', MerchantOrderCtrl);

	MerchantOrderCtrl.$inject = ['$scope', 'User', 'OrderService', 'OrderStatus', 'MSG', '$stateParams', 'userrestriction'];

	function MerchantOrderCtrl($scope, User, OrderService, OrderStatus, MSG, $stateParams, userrestriction) {
		var vm = this;
		vm.data = {};
		vm.orderStatus = OrderStatus;
		vm.data.merchant = User.data || {};
		vm.data.orderParams = {
			busy: false,
			offset: 0,
			limit: 10,
			merchant_id: vm.data.merchant.id,
			status: $stateParams.status
		};
		vm.data.orders = [];
		vm.nextPage = nextPage;
		vm.changeStatus = changeStatus;

		function changeStatus(status, id) {
			var param = {
				status: status.key,
				order_id: id
			};

			OrderService.changeStatus(param).then(function(response) {
				if (!response.data.error) {
					var index = _.findIndex(vm.data.orders, {order_id: id});
					if (index !== -1) {
						if (status.key !=4) {
							vm.data.orders[index].order_status = status.label;
						} else {
							delete vm.data.orders[index];
							vm.data.orderParams.offset--;
						}
					}
				} else {
					toaster.pop({
                        type: 'error', 
                        title:'Error', 
                        body: MSG.statusChangeFailed, 
                        toasterId: 1
                    });
				}
			}, function(error) {
				toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: MSG.statusChangeFailed, 
                    toasterId: 1
                });
			});
		}

		function searchOrder() {
			var param = getOrderParams();
			OrderService.get(param).then(function(res) {
				if (!res.data.error) {
					assignOrders(res.data.data);
				} else {
					assignOrders([]);
				}
			});
		}

		function assignOrders(items) {
			for (var i = 0; i < items.length; i++) {
	            var index = _.findIndex(vm.data.orders, {id: items[i].id});
	            if (-1 === index) {
	              vm.data.orders.push(items[i]);
	            }
	        }
	        vm.data.orderParams.offset = vm.data.orders.length;
	        vm.data.orderParams.busy = false;
		}

		function getOrderParams() {
			return {
				offset: vm.data.orderParams.offset,
				limit: vm.data.orderParams.limit,
				status: vm.data.orderParams.status
			};
		}

		function initializeOrderList() {
			vm.data.orderParams.offset = 0;
			vm.data.orderParams.busy = false;
			vm.data.orders.length = 0;
			searchOrder();
		}

		function nextPage() {
			if (!vm.data.orderParams.busy) {
				vm.data.orderParams.busy = true;
				searchOrder();
			}
		}

		initializeOrderList();
	}
})(angular);
/*
*
*/
;(function(angular) {
   'use strict';
   angular.module('litewait.ui').controller('MerchantReviewCtrl', MerchantReviewCtrl);

   MerchantReviewCtrl.$inject = ['$scope', 'User', 'ReviewService', 'userrestriction'];

   function MerchantReviewCtrl($scope, User, ReviewService, userrestriction) {
      var vm = this;
      vm.data = {};
      vm.data.merchant = User.data || {};

      vm.data.reviewParams = {
			busy: false,
			offset: 0,
			limit: 10,
			merchant: vm.data.merchant.username
		};
		vm.data.review = [];
		vm.nextPage = nextPage;

		function searchReview() {
			var param = getReviewParams();
			ReviewService.getMerchantReviews(param).then(function(res) {
				if (!res.data.error) {
					assignReviews(res.data.data);
				}
			});
		}

		function assignReviews(items) {
			for (var i = 0; i < items.length; i++) {
	            var index = _.findIndex(vm.data.review, {date: items[i].date});
	            if (-1 === index) {
	              vm.data.review.push(items[i]);
	            }
	        }
	        vm.data.reviewParams.offset = vm.data.review.length;
	        vm.data.reviewParams.busy = false;
		}

		function getReviewParams() {
			return {
				offset: vm.data.reviewParams.offset,
				limit: vm.data.reviewParams.limit,
				merchant: vm.data.merchant.username
			};
		}

		function initializeReviewList() {
			vm.data.reviewParams.offset = 0;
			vm.data.reviewParams.busy = false;
			vm.data.review.length = 0;
			searchReview();
		}

		function nextPage() {
			if (!vm.data.reviewParams.busy) {
				vm.data.reviewParams.busy = true;
				searchReview();
			}
		}

		initializeReviewList();
   }
})(angular);

;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('merchant', {
                url: '/merchant',
                views: {
                    "merchant-landing@merchant": {
                        templateUrl: 'merchant/merchant-order-in-progress.html',
                        controller: 'MerchantOrderCtrl',
                        controllerAs: 'moc'
                    },
                    '@': {
                        templateUrl: 'merchant/merchant-landing.html',
                        controller: 'MerchantLandingCtrl',
                        controllerAs: 'mlc'
                    }
                },
                params: { status: [1,2,3] },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        var handler;
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.order', {
                url: '/order',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-order-in-progress.html',
                        controller: 'MerchantOrderCtrl',
                        controllerAs: 'moc'
                    }
                },
                params: { status: [1,2,3] },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.pastorder', {
                url: '/pastorder',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-past-order.html',
                        controller: 'MerchantOrderCtrl',
                        controllerAs: 'mpoc'
                    }
                },
                params: {status: [4]},
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.review', {
                url: '/review',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-review.html',
                        controller: 'MerchantReviewCtrl',
                        controllerAs: 'mrc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.menu', {
                url: '/menu',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-menu.html',
                        controller: 'MerchantMenuCtrl',
                        controllerAs: 'mmc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.menuadd', {
                url: '/menu/add',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-menu-new.html',
                        controller: 'NewMenuCtrl',
                        controllerAs: 'nmc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    },
                    menu: function() {
                        return false;
                    }
                }
            })
            .state('merchant.menuedit', {
                url: '/menu/edit/:id',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-menu-new.html',
                        controller: 'NewMenuCtrl',
                        controllerAs: 'nmc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    },
                    menu: function(MenuService, $stateParams, User) {
                        var data = {
                            merchant_id: User.data.id,
                            item_id: $stateParams.id
                        };

                        return MenuService.getCategoryByMandMId(data).then(function(response) {
                            if (!response.error && response.data !== null) {
                                return response.data.data;
                            } else {
                                return false;
                            }
                        });
                    }
                }
            })
            .state('merchant.category', {
                url: '/category',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-category.html',
                        controller: 'MerchantCategoryCtrl',
                        controllerAs: 'mcc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.categoryadd', {
                url: '/category/add',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-category-new.html',
                        controller: 'NewCategoryCtrl',
                        controllerAs: 'ncc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    },
                    category: function() {
                        return false;
                    }
                }
            })
            .state('merchant.categoryedit', {
                url: '/category/edit/:category_id',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-category-new.html',
                        controller: 'NewCategoryCtrl',
                        controllerAs: 'ncc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    },
                    category: function(MenuService, $stateParams, User, $state) {
                        var data = {
                            merchant_id: User.data.id,
                            category_id: $stateParams.category_id
                        };

                        return MenuService.getCategoryByMandCId(data).then(function(res){
                            if (!res.data.error) {
                                var index = _.findIndex(res.data.data.item_categories, {id: $stateParams.category_id});
                                if (index == -1) {
                                    $state.go('merchant.category');
                                }
                                return res.data.data.item_categories[index];
                            }

                            return false;
                        });
                    }
                }
            });
    }
})(angular);

/*
 *
 */
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('navbarCtrl', navbarCtrl);

	navbarCtrl.$inject = ['$scope', '$q', '$state', '$uibModal', 'User', 'AuthService', 'PubSub', 'Spinner', 'SPINING_EVENTS', 'HTTPEvent', 'CartService'];

	function navbarCtrl($scope, $q, $state, $uibModal, User, AuthService, PubSub, Spinner, SPINING_EVENTS, HTTPEvent, CartService) {
        var vm = this;
        vm.form = {};
		vm.user = User;
		vm.auth = AuthService;
        vm.cart = CartService;
		vm.notifyToggle = false;
		$scope.signin = vm.signin = 1;
        $scope.signup = vm.signup = 2;
        $scope.activeTab = vm.activeTab = 1;
        vm.spinner = Spinner;

		vm.openUserModal = openUserModal;
		vm.openSignUpModal = openSignUpModal;
		vm.logout = logout;
		vm.go = go;

		function openUserModal() {
			$scope.activeTab = 1;
			userModal();
		}

        PubSub.subscribe('open:login', function() {
            openUserModal();                
        });

		function openSignUpModal(event) {
            if (event) {
                event.preventDefault();
            }
			$scope.activeTab = 2;
			userModal();
		}

		function logout() {
        	AuthService.logout().then(function() {
        		$state.go('home');
        	}, function() {

        	});
        }

        function go(state) {
        	$state.go(state);
        }

		function userModal() {
            var modalInstance = $uibModal.open({
                templateUrl: 'userModal.html',
                backdrop: 'static',
                size: 'sm',
                windowClass: 'signin-modal',
                keyboard: false,
                scope: $scope,
                bindToController: true,
                controllerAs: 'loginModal',
                controller: function($scope, $uibModalInstance, PubSub, AuthService, toaster, AUTH_MSG, AUTH_PROPS, User, $state) {
                    var vm = this;
                    vm.modalProps = {};
                    vm.modalProps.signin = $scope.$parent.signin;
                    vm.modalProps.signup = $scope.$parent.signup;
                    vm.modalProps.active = $scope.$parent.activeTab;
                    vm.modalProps.username = '';
                    vm.modalProps.password = '';
                    vm.modalProps.user_type = 'c';
                    vm.modalProps.isForgotPassword = false;
                    vm.modalProps.passwordPattern = AUTH_PROPS.PASSWORD_PATTERN;

                    vm.resetProps = {
                        user: '',
                        user_type: 'c',
                    };

                    vm.registerProps = {
                        user: '',
                        user_mail: '',
                        user_password: '',
                        user_confirm_password: '',
                        user_type: 'c'
                    };

                    vm.modalProps.login = login;
                    vm.modalProps.register = register;
                    vm.modalProps.resetPwd = resetPwd;
                    vm.modalProps.joinUs = joinUs;

                    function joinUs() {
                        vm.modalProps.isForgotPassword = false;
                        vm.modalProps.active = 2;
                    }

                    function resetPwd(valid, data) {
                        data = data || {};
                        User.resetPassword(data).then(function(response) {
                            if (!(response.data.error || response.error)) {
                                vm.modalProps.close();
                                toaster.pop({
                                    type: 'success', 
                                    title:'Success', 
                                    body: AUTH_MSG.resetSuccess, 
                                    toasterId: 1
                                });
                            } else {
                                toaster.pop({
                                    type: 'error', 
                                    title:'Error', 
                                    body: AUTH_MSG.resetFailed, 
                                    toasterId: 4
                                });
                            }
                            
                        }, function(error) {
                            toaster.pop({
                                type: 'error', 
                                title:'Error', 
                                body: AUTH_MSG.resetFailed, 
                                toasterId: 4
                            });
                        });
                    } 

                    function login(valid, provider, data) {
                        data = data || {};
                        AuthService.authenticate(provider, data).then(function(response) {
                            if (!(response.data.error || response.error)) {
                                vm.modalProps.close();
                                if (User.role == 'm') {
                                    $state.go('merchant.order');
                                }
                            } else {
                                toaster.pop({
                                    type: 'error', 
                                    title:'Error', 
                                    body: AUTH_MSG.loginFailed, 
                                    toasterId: 3
                                });
                            }
                            
                        }, function(error) {
                            toaster.pop({
                                type: 'error', 
                                title:'Error', 
                                body: AUTH_MSG.loginFailed, 
                                toasterId: 3
                            });
                        });
                    }

                    function register(valid, data) {
                        if (!valid) return;
                        var udata = {};
                        udata.user = data.user;
                        udata.user_mail = data.user_mail;
                        udata.user_password = data.user_password;
                        udata.user_type = data.user_type;

                        AuthService.register(udata).then(function(response) {
                            if (!(response.data.error || response.error)) {
                                toaster.pop({
                                    type: 'success', 
                                    title: 'Success', 
                                    body: AUTH_MSG.registerSuccess,
                                    toasterId: 1
                                });
                                vm.modalProps.close();
                            } else {
                                toaster.pop({
                                    type: 'error', 
                                    title: 'Error', 
                                    body: AUTH_MSG.registerFailed, 
                                    toasterId: 2
                                });
                            }
                            
                        }, function (err) {
                            toaster.pop({
                                type: 'error', 
                                title: 'Error', 
                                body: AUTH_MSG.registerFailed, 
                                toasterId: 2
                            });
                        });
                    }

                    vm.modalProps.close = function() {
                        $uibModalInstance.close();
                    };
                }
            });
        }

        HTTPEvent.on(SPINING_EVENTS.SPINING, function (data) {
            Spinner.spining(data);
        });
	}


    
})(angular);
/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('SearchBoxCtrl', SearchBoxCtrl);

	SearchBoxCtrl.$inject = ['$scope', '$state', '$stateParams', 'PubSub', 'Search', 'Location', 'srch', 'geolocation'];

	function SearchBoxCtrl($scope, $state, $stateParams, PubSub, Search, Location, srch, geolocation) {
		var vm = this;
		vm.searchCriteria = {};
		vm.isLocation = false;
		if ($stateParams.location) {
			vm.searchCriteria.location = $stateParams.location;
		} else if (Location.current.place) {
			vm.searchCriteria.location = Location.current.place;
			vm.isLocation = true;
		} else if (geolocation.status) {
			vm.searchCriteria.location =  geolocation.data;	
			vm.isLocation = true;
		}
		
		vm.searchCriteria.keyword =  '';
		if ($stateParams.keyword) {
			vm.searchCriteria.keyword = $stateParams.keyword;
		} else if (Location.current.keyword) {
			vm.searchCriteria.keyword = Location.current.keyword;
		}

		vm.search = srch;

		vm.searchFn = searchFn;
		vm.getLocation = getLocation;
		vm.onSelectRegion = onSelectRegion;
		vm.getKeywords = getKeywords;

		function searchFn(event) {
			if (srch == 'home') {
				$state.go('search', {
					location: vm.searchCriteria.location, 
					keyword: vm.searchCriteria.keyword
				});
			} else {
				PubSub.publish('search', vm.searchCriteria);
				//TODO: do the actual search and emit the result
			}
		}

		function getLocation(str) {
			return Search.getRegions(str);
		}

		function getKeywords(str) {
			if (!vm.searchCriteria.location) {
				return [];
			}
			var data = {
				region_id: vm.searchCriteria.location.region_id,
				city_id: vm.searchCriteria.location.city_id,
				search_text: str
			};
			return Search.getKeywords(data);
		}

		function onSelectRegion() {
			Location.current.place = vm.searchCriteria.location;
		}

		function onSelectKeyword() {
			Location.current.keyword = vm.searchCriteria.keyword;
		}

		$scope.$watch(function(scope) {
            // Return the "result" of the watch expression.
            return vm.searchCriteria.location;
        },
        function(newValue, oldValue) {
            if (!vm.searchCriteria.location && Location.data) {
            	vm.searchCriteria.location = Location.data;
            	Location.current.place = vm.searchCriteria.location;
            	vm.isLocation = true;
            }

            if (!vm.searchCriteria.location && !Location.data) {
            	vm.isLocation = false;
            	Location.current.place = null;
            }

            if (vm.searchCriteria.location || Location.data) {
            	vm.isLocation = true;
            }
        });

        $scope.$watch(function(scope) {
            // Return the "result" of the watch expression.
            return vm.searchCriteria.keyword;
        },
        function(newValue, oldValue) {
            if (!vm.searchCriteria.keyword || vm.searchCriteria.keyword === '') {
            	Location.current.keyword = '';
            } else {
	            Location.current.keyword = newValue;
	        }
        });

        if (srch !== 'home') {
        	PubSub.publish('search', vm.searchCriteria);
        }
	}
})();
/*
 *
 */
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('MyOrderCtrl', MyOrderCtrl);

	MyOrderCtrl.$inject = ['$scope', 'User', 'OrderService', 'OrderStatus', 'MSG', '$stateParams', '$filter', 'authentication'];

	function MyOrderCtrl($scope, User, OrderService, OrderStatus, MSG, $stateParams, $filter, authentication) {
		var vm = this;
		vm.data = {};
		vm.orderStatus = orderStatus;
		vm.data.merchant = User.data || {};
		vm.data.orderParams = {
			busy: false,
			offset: 0,
			limit: 10,
			merchant_id: vm.data.merchant.id,
			status: $stateParams.status
		};
		vm.data.orders = [];
		vm.nextPage = nextPage;

		function searchOrder() {
			var param = getOrderParams();
			OrderService.get(param).then(function(res) {
				assignOrders(res);
			});
		}

		function assignOrders(items) {
			for (var i = 0; i < items.length; i++) {
	            var index = _.findIndex(vm.data.orders, {id: items[i].id});
	            if (-1 === index) {
	            	var date = items[i].order_date;
	            	var dateString = $filter('date')(date, 'dd/MM/yyyy hh:mm a');
	            	items[i].order_date_string = dateString;
	            	vm.data.orders.push(items[i]);
	            }
	        }
	        vm.data.orderParams.offset = vm.data.orders.length;
		}

		function getOrderParams() {
			return {
				offset: vm.data.orderParams.offset,
				limit: vm.data.orderParams.limit,
				status: vm.data.orderParams.status
			};
		}

		function initializeOrderList() {
			vm.data.orderParams.offset = 0;
			vm.data.orderParams.busy = false;
			vm.data.orders.length = 0;
			seachOrder();
		}

		function nextPage() {
			if (!vm.data.orderParams.busy) {
				vm.data.orderParams.busy = true;
				searchOrder();
			}
		}

		searchOrder();
	}


})(angular);
/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('OrderSummaryCtrl', OrderSummaryCtrl);

	OrderSummaryCtrl.$inject = ['$scope', 'orderdetails'];

	function OrderSummaryCtrl($scope, orderdetails) {
		var vm = this;
		vm.data = {
			order: orderdetails
		};
	}
})();

;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('order', {
                abstract: true
            })
            .state('order.myorder', {
            	url: "/myorder",
                views: {
                    "@": {
                        templateUrl: "orders/myorder.html",
                        controller: "MyOrderCtrl",
                        controllerAs: "olc"
                    }
                },
                params: { status: [1,2,3,4]},
                resolve: {
                    authentication: function (AuthService, $q, $timeout) {
                        var deferred = $q.defer();
                        
                        var handler = $timeout(function() {
                            var auth = AuthService.isAuthenticated();
                            if (auth) {
                                deferred.resolve(true);
                            } else {
                                deferred.reject(true);
                            }
                            $timeout.cancel(handler);
                        }, 0);
                        
                        return deferred.promise;
                    }
                }
            })
            .state('order.thankyou', {
                url: "/order/thankyou/:time",
                views: {
                    "@": {
                        templateUrl: "orders/thankyou.html",
                        controller: "ThankyouCtrl",
                        controllerAs: "tuc"
                    }
                }
            })
            .state('order.summary', {
                url: "/order-summary/:orderId",
                views: {
                    "@": {
                        templateUrl: "orders/order-summary.html",
                        controller: "OrderSummaryCtrl",
                        controllerAs: "osc"
                    }
                },
                resolve: {
                    orderdetails: function($stateParams, OrderService) {
                        if ($stateParams.orderId) {
                            return OrderService.getById($stateParams.orderId).then(function(response) {
                                if (!response.data.error) {
                                    return response.data.data;
                                }
                                return false;
                            });
                        }
                        return false;
                    }
                }
            });
    }
})(angular);
/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.ui').controller('ThankyouCtrl', ThankyouCtrl);

	ThankyouCtrl.$inject = ['$scope', '$stateParams', 'session'];

	function ThankyouCtrl($scope, $stateParams, session) {
		var vm = this;

		vm.isThanks = false;

		var time = $stateParams.time;
		vm.data = session.getItem(time);
		if (time && vm.data) {
			vm.isThanks = true;
		}
	}
})();
/*
 *
 */
;(function() {
	'use strict';
	angular.module('litewait.ui').controller('SearchCtrl', SearchCtrl);

	SearchCtrl.$inject = ['$scope', '$state', 'PubSub', 'Location', 'Search', 'srch', 'authentication'];

	function SearchCtrl($scope, $state, PubSub, Location, Search, srch, authentication) {
		var vm = this;
		vm.merchant = {
			list: [],
			busy: false,
			offset: 0,
			limit: 10,
			searchCriteria: {},
			totalRecords: 0
		};
		vm.keyword = '';
		vm.viewMerchant = viewMerchant;
		vm.initializeMerchant = initializeMerchant;
		vm.nextPage = nextPage;

		function viewMerchant(id) {
			$state.go('shop.detail', {id: id});
		}

		function searchMerchant() {
			var obj = getMerchantParams();
			Search.getMerchantList(obj).then(function(response) {
				assignMerchants(response.merchants);
				vm.merchant.busy = false;
			}, function() {
				vm.merchant.busy = false;
			});
		}

        function assignMerchants(items) {
          for (var i = 0; i < items.length; i++) {
            var index = _.findIndex(vm.merchant.list, {id: items[i].id});
            if (-1 === index) {
              vm.merchant.list.push(items[i]);
            }
          }
          vm.merchant.offset = vm.merchant.list.length;
        }

        function getMerchantParams() {
        	vm.keyword = vm.merchant.searchCriteria.keyword.category;
          	return {
				region_id: vm.merchant.searchCriteria.location.region_id,
				city_id: vm.merchant.searchCriteria.location.city_id,
				search_text: vm.merchant.searchCriteria.keyword.category,
				page_no: vm.merchant.offset,
				page_size: vm.merchant.limit
			};
        }

        function initializeMerchant() {
          vm.merchant.offset = 1;
          vm.merchant.list.length = 0;
          searchMerchant();
        }

        function nextPage() {
          var params = getMerchantParams();

          if ( ! vm.merchant.busy) {
            vm.merchant.busy = true;
            searchMerchant();
          }
        }

        PubSub.subscribe('search', function(event, obj) {
			vm.merchant.searchCriteria = obj.args;
			initializeMerchant();
		});
	}
})();


;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('search', {
            	url: "/serach",
                views: {
                    "search-box@search": {
                      templateUrl: 'navigation/search-box.html',
                      controller: "SearchBoxCtrl",
                      controllerAs: "sbc"
                    },
                    "@": {
                        templateUrl: "search/search.html",
                        controller: "SearchCtrl",
                        controllerAs: "sc"
                    }
                },
                params: {location: '', keyword: ''},
                resolve: {
                    srch: function ($q, $timeout) {
                        var deferred = $q.defer();

                        var handler = $timeout(function() {
                            deferred.resolve('search');
                            $timeout.cancel(handler);
                        }, 0);

                        return deferred.promise;
                    },
                    geolocation: function ($q, Search, $timeout, Location) {
                        var loc = {};
                        var deferred = $q.defer();

                        var handler = $timeout(function() {
                            Search.getRegionByGeo().then(function(response) {
                                if (!response.data.error) {
                                    Location.status = loc.status = true;
                                    Location.data = loc.data = response.data.data;
                                    deferred.resolve(loc);
                                } else {
                                    getByIp();
                                }
                            }, function(error) {
                                getByIp();
                            });

                            function getByIp() {
                                Search.getRegionByIP().then(function(res) {
                                    if (!res.data.error) {
                                        Location.status = loc.status = true;
                                        Location.data = loc.data = res.data.data;
                                        deferred.resolve(loc);
                                    } else {
                                        Location.status = loc.status = false;
                                        Location.data = loc.data = null;
                                        deferred.resolve(loc);
                                    }
                                }, function() {
                                    Location.status = loc.status = false;
                                    Location.data = loc.data = null;
                                    deferred.resolve(loc);
                                });
                            }

                            $timeout.cancel(handler);
                        }, 0);
                        return deferred.promise;
                    },
                    authentication: function (User, $state, $timeout) {
                        if (!User.isLoggedIn) return true;
                        if (User.isLoggedIn && User.role == 'm') {
                            var handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('merchant');
                            }, 0);
                        }
                    }
                }
            });
    }
})(angular);

/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('AddonService', AddonService);

	AddonService.$inject = ['$http', 'RouteConfig'];

	function AddonService($http, RouteConfig) {
		var apiBase = RouteConfig.apiBase + '/menu/addons';
		var service = {};

		service.get = get;

		function get(data) {
			var params = {
				params: data
			};

			return $http.get(apiBase, params);
		}

		return service;
	}
})();
/**
 *
 */
;(function(angular){

    'use strict';
    var USER_KEY = 'USER:KEY';
    angular.module('litewait.services')
        .constant('MSG', {
            addCategorySuccess: 'Category has been added successfully',
            addCategoryFailed: 'Adding Category failed',
            updateCategorySuccess: 'Category has been updated successfully',
            updateCategoryFailed: 'Update category has been failed',
            deleteCategorySuccess: 'Category has been deleted successfully',
            deleteCategoryFailed: 'Category delete has been failed',
            addMenuSuccess: 'Menu has been added successfully',
            addMenuFailed: 'Adding Menu failed',
            updateMenuSuccess: 'Menu has been updated successfully',
            updateMenuFailed: 'Update menu has been failed',
            deleteMenuSuccess: 'Menu has been deleted successfully',
            deleteMenuFailed: 'Menu delete has been failed',
            changeStatusSuccess: 'Order status has been changed successfully',
            changeStatusFailed: 'Order status change has been failed',
            orderSuccess: 'Order has been failed',
            orderFailed: 'Order has been placed successfully',
            merchantUpdateFailed: 'Merchant update has been failed',
            merchantUpdateSuccess: 'Merchant has been updated successfully'
        })
        .constant('AUTH_EVENTS', {
            loginSuccess: 'auth:login-success',
            loginFailed: 'auth:login-failed',
            logoutSuccess: 'auth:logout-success',
            logoutFailed: 'auth:logout-failed',
            sessionTimeout: 'auth:session-timeout',
            notAuthenticated: 'auth:not-authenticated',
            notAuthorized: 'auth:not-authorized'
        })
        .constant('AUTH_MSG', {
            loginSuccess: 'User logged in successfully',
            loginFailed: 'Invalid attempt, please check email/password',
            logoutSuccess: 'You have been logged out successfully',
            logoutFailed: 'Logout failed',
            registerSuccess: 'Registration success',
            registerFailed: 'Registration failed',
            profileUpdateSuccess: 'Profile has been successfully updated',
            profileUpdateFailed: 'Profile update has been failed',
            paymentUpdateSuccess: 'Payment has been successfully updated',
            paymentUpdateFailed: 'Payment update has been failed',
            chPwdSuccess: 'Password has been changed successfully',
            chPwdFailed: 'Password change has been failed',
            resetSuccess: 'Password has been reseted successfully',
            resetFailed: 'Password reset has been failed'
        })
        .constant('AUTH_PROPS', {
            'PASSWORD_PATTERN': "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}",
            'CARD': '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$',
            'CVV': '^[0-9]{3,4}$'
        })
        .factory('User', User)
        .config(config)
        .factory('AuthInterceptor', AuthInterceptor)
        .provider('AuthService', AuthService);

    User.$inject = ['$http', 'RouteConfig', '$q', 'AUTH_MSG', 'toaster', 'session'];
    config.$inject = ['$httpProvider'];
    AuthInterceptor.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];

    function User ($http, RouteConfig, $q, AUTH_MSG, toaster, session) {

        var urlBase = RouteConfig.apiBase;
        var sessionUser = {
            id: 0,
            isLoggedIn: false,
            username: '',
            email: '',
            role: null,
            name: 'User',
            data: {}
        };

        sessionUser.updateProfile = function (data) {
            var deferred = $q.defer();
            return $http.put(urlBase + '/user', data).success(function(response) {
                return deferred.resolve(response);
            }).error(function(error) {
                toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: AUTH_MSG.profileUpdateFailed, 
                    toasterId: 1
                });
                deferred.reject();
            });
        };

        sessionUser.updatePayment = function (data) {
            var deferred = $q.defer();
            return $http.post(urlBase + '/payment', data).success(function(response) {
                return deferred.resolve(response);
            }).error(function(error) {
                toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: AUTH_MSG.paymentUpdateFailed, 
                    toasterId: 1
                });
                deferred.reject();
            });
        };

        sessionUser.changePassword = function (data) {
            return $http.put(urlBase + '/passhash', data).then(function(response) {
                return response;
            }, function(error) {
                toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: AUTH_MSG.chPwdFailed, 
                    toasterId: 1
                });
            });
        };

        sessionUser.resetPassword = function (data) {
            return $http.post(urlBase + '/forgotpassword', data).then(function(response) {
                return response;
            });
        };

        sessionUser.verifyUser = function (code) {
            return $http.put(urlBase + '/verifyuser?activation_code=' + code);
        };


        sessionUser.assign = function(user) {
            if (user) {
                var data = {};
                data.isLoggedIn = true;
                data.id = user.contact.mail_id;
                data.username = user.user;
                data.email = user.contact.mail_id;
                data.role = user.user_type;
                data.name = user.username;
                data.data = user;
                
                angular.extend(sessionUser, data);
                sessionUser.resetUser(sessionUser.data);
            } else {
                sessionUser.resetUser(null);
                sessionUser.clear();
            }
        };

        sessionUser.resetUser = function(data) {
            if (data) {
                session.setItem(USER_KEY, data);
            } else {
                session.removeItem(USER_KEY);
            }
        };

        sessionUser.clear = function() {
            sessionUser.id = 0;
            sessionUser.name = 'User';
            sessionUser.role = '';
            sessionUser.username = '';
            sessionUser.email = '';
            sessionUser.isLoggedIn = false;
            sessionUser.data = {};
            sessionUser.resetUser(null);
        };

        return sessionUser;
    }

    function config($httpProvider) {
        $httpProvider.interceptors.push([
            '$injector',
            function($injector) {
                return $injector.get('AuthInterceptor');
            }
        ]);
    }

    function AuthInterceptor($rootScope, $q, AUTH_EVENTS) {
        return {
            responseError: function(response) {
                if (response.status === 401) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated, response);
                }
                if (response.status === 403) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized, response);
                }
                if (response.status === 419 || response.status === 440) {
                    $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout, response);
                }
                return $q.reject(response);
            }
        };
    }

    function AuthService () {

        var API_KEY_HEADER = 'X-Auth-Token',
            AUTH_ENDPOINT = '/login',
            WHOAMI_ENDPOINT = '/auth',
            REGISTER_ENDPOINT = '/user',
            LOGOUT_ENDPOINT = '/logout';

        this.$get = [
            '$q', '$rootScope', '$http', 'User', 'RouteConfig', 'AUTH_EVENTS', 'AUTH_MSG', '$auth', 'toaster', 'session',

            function($q, $rootScope, $http, User, RouteConfig, AUTH_EVENTS, AUTH_MSG, $auth, toaster, session) {

                var TOKEN_KEY = 'AUTH:TOKEN';
                var USER_KEY = 'USER:KEY';

                var getUrl = function(path) {
                    return RouteConfig.apiBase + path;
                };

                var removeTokenHeader = function() {
                    if ($http.defaults.headers.common[API_KEY_HEADER]) {
                        delete $http.defaults.headers.common[API_KEY_HEADER];
                    }
                };

                var raise = function(evt, data) {
                    $rootScope.$broadcast(evt, data);
                };

                var setToken = function(token) {
                    if (token) {
                        session.setItem(TOKEN_KEY, token);
                        setTokenInHeader(token);
                    } else {
                        session.removeItem(TOKEN_KEY);
                        removeTokenHeader();
                    }
                };

                
                var getToken = function() {
                    var a = session.getItem(TOKEN_KEY);
                    return session.getItem(TOKEN_KEY);
                };

                var getUser = function() {
                    return session.getItem(USER_KEY);
                };

                var reloadUser = function(token) {
                    var deferred = $q.defer(),
                        authUrl = getUrl(WHOAMI_ENDPOINT);

                    var userVal = getUser();
                    User.assign(userVal);
                    var data = {};
                    deferred.resolve(User);

                    /*                    
                    $http({
                        method: 'GET',
                        url: authUrl,
                        data: data
                    }).success(function(data) {
                       // data.isLoggedIn = true;
                       // User.assign(data);
                       // setToken(token);
                        deferred.resolve(User);
                    }).error(function(reason) {
                        // clear user, clear token
                       // setToken(null);
                        //User.clear();
                        //deferred.reject(reason);
                        deferred.resolve(User);
                    });
                    */
                    return deferred.promise;
                };

                var setTokenInHeader = function(token) {
                    token = token || getToken();
                    if (token) {
                        $http.defaults.headers.common[API_KEY_HEADER] = token;
                        if (!User.isLoggedIn) {
                            reloadUser(token);
                        }
                    }
                };

                // If the browser reloads, reset auth token in header if user was logged in before the reload
                setTokenInHeader();

                var service = {
                    API_KEY_HEADER: API_KEY_HEADER,
                    isAuthenticated: function() {
                        return !!service.getAuthToken();
                    },
                    register: function(user) {
                        var params = user ? user : {},
                            endpoint = getUrl(REGISTER_ENDPOINT);

                        return $http.post(endpoint, params);
                    },
                    authenticate: function (provider, data) {
                        switch(provider) {
                            case 'litewait':
                                return service.login(data);
                                break;
                            case 'facebook':    
                                return service.facebookLogin(data);
                                break;
                            case 'google':
                                return service.googleLogin(data);    
                                break;
                        }
                    },
                    facebookLogin: function (data) {
                        var params = {
                            provider: 'facebook',
                            user_type: data.user_type
                        };

                        return $auth.authenticate(provider).then(function(response) {
                            console.log(response);
                            params.code = response.access_token;
                            params.expiresIn = response.expires_in;
                            return service.login(params);
                        }, function (error) {
                            console.log('facebook failed');
                            setToken(null);
                            User.clear();
                            raise(AUTH_EVENTS.loginFailure, params);
                        });
                    },
                    googleLogin: function (data) {
                        var params = {
                            provider: 'google',
                            user_type: data.user_type
                        };

                        return $auth.authenticate(provider).then(function(response) {
                            console.log(response);
                            params.code = response.access_token;
                            params.expiresIn = response.expires_in;
                            return service.login(params);
                        }, function (error) {
                            console.log('google failed');
                            setToken(null);
                            User.clear();
                            raise(AUTH_EVENTS.loginFailure, params);
                        });
                    },
                    login: function(data) {
                        var authUrl = getUrl(AUTH_ENDPOINT),
                            deferred = $q.defer(),
                            params = {
                                provider: 'litewait',
                                user: data.username,
                                user_password: data.password,
                                user_type: data.user_type
                            };

                        return $http({
                            method: 'POST',
                            url: authUrl,
                            data: params
                        }).success(function(response, status, headers) {
                            if (!response.error) {
                                response.data.user_type = params.user_type;
                                User.assign(response.data);
                                setToken(response.data.user_session || response.data.merchant_session);
                                raise(AUTH_EVENTS.loginSuccess, User);
                                deferred.resolve(User);
                            } else {
                                setToken(null);
                                User.clear();
                                raise(AUTH_EVENTS.loginFailure, params);
                                deferred.reject();
                            }
                        }).error(function(reason) {
                            setToken(null);
                            User.clear();
                            raise(AUTH_EVENTS.loginFailure, params);
                            deferred.reject(reason);
                        });
                    },
                    logout: function() {
                        var endpoint = getUrl(LOGOUT_ENDPOINT);
                        var deferred = $q.defer();

                        var saveUser = _.clone(User);
                        
                        return $http.get(endpoint + '?user_type=' + User.role).success(function(response) {
                            if (!response.error) {
                                
                                setToken(null);
                                User.clear();
                                session.clear();
                                raise(AUTH_EVENTS.logoutSuccess, saveUser);
                                toaster.pop({
                                    type: 'success', 
                                    title:'Success', 
                                    body: AUTH_MSG.logoutSuccess, 
                                    toasterId: 1
                                });
                                return deferred.resolve(response);
                            } else {
                                raise(AUTH_EVENTS.logoutFailed, saveUser);
                                toaster.pop({
                                    type: 'error', 
                                    title:'Error', 
                                    body: AUTH_MSG.logoutFailed, 
                                    toasterId: 1
                                });
                                return deferred.reject(response);
                            }
                        });
                    },
                    getAuthToken: function() {
                        return getToken();
                    }
                };

                return service;
            }

        ];

    }

})(angular);
/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('CartService', CartService);

	CartService.$inject = ['$q', 'session', 'User', 'PubSub', 'OrderService', 'EVENTS', 'MSG', 'toaster'];

	function CartService($q, session, User, PubSub, OrderService, EVENTS, MSG, toaster) {
		var storeKey = 'cart:data';
		var service = {
			init: init,
			remove: remove,
			add: add,
			get: get,
			process: process,
			addQty: addQty,
			removeQty: removeQty,
			placeOrder: placeOrder,
			user: User.username,
			total_price: 0,
			total_quantity: 0,
			merchantId: '',
			merchantDetails: {},
			order_details: []
		};

		function placeOrder() {
			var cart = {
				user: User.username,
				merchant_id: service.merchantId,
				total_quantity: service.total_quantity,
				order_details: []
			};

			for(var i = 0;i < service.order_details.length;i++) {
				var order_details = {
					category_id: service.order_details[i].category_id,
					item_id: service.order_details[i].item_id,
					item_name: service.order_details[i].item_name,
					description: service.order_details[i].description,
					qty: service.order_details[i].qty,
					price: service.order_details[i].price,
					picture: service.order_details[i].picture,
					addons: service.order_details[i].addons
				};
				cart.order_details.push(order_details);
			}

			if (!cart.order_details.length) {
				return;
			}

			OrderService.placeOrder(cart).then(function(response) {
				if (!response.data.error) {
					service.clear();
					toaster.pop({
                        type: 'success', 
                        title:'Success', 
                        body: MSG.orderSuccess, 
                        toasterId: 1
                    });
					PubSub.publish(EVENTS.ORDER_PLACED, {order_id: response.data.data.order_id, merchant: service.merchantDetails});
				} else {
					toaster.pop({
                        type: 'error', 
                        title:'Error', 
                        body: MSG.orderFailed, 
                        toasterId: 1
                    });
				}
			}, function (err) {
				toaster.pop({
	                type: 'error', 
	                title:'Error', 
	                body: MSG.orderFailed, 
	                toasterId: 1
	            });
			});
		}

		function addQty(item_id) {
			var index = _.findIndex(service.order_details, {item_id: obj.item_id});
			if (index !== -1) {
				service.order_details[index].qty += 1;
				service.total_price += (1 * service.order_details[index].price);
			}			
		}

		function removeQty(item_id) {
			var index = _.findIndex(service.order_details, {item_id: obj.item_id});
			if (index !== -1) {
				if (service.order_details[index].qty > 1) {
					service.order_details[index].qty -= 1;
					service.total_price -= (1 * service.order_details[index].price);
				}
			}	
		}

		function add(obj, merchant) {
			if (merchant && merchant.id != service.merchantId) {
				service.order_details.length = 0;
				service.total_quantity = 0;
				service.total_price = 0;
				service.merchantId = merchant.id;
				service.merchantDetails = merchant;
			}

			var index = _.findIndex(service.order_details, {item_id: obj.item_id});
			var cartObject;
			if (index !== -1) {
				service.total_price -= (service.order_details[index].qty * service.order_details[index].price);
				if (service.total_price < 0) {
					service.total_price = 0;
				}
				service.order_details[index].qty = parseInt(obj.qty);
				service.total_price += (service.order_details[index].qty * service.order_details[index].price);
				cartObject = service.order_details[index];
			} else {
				cartObject = {
					category_id: obj.category_id,
					item_id: obj.item_id,
					item_name: obj.item_name,
					description: obj.description,
					qty: parseInt(obj.qty),
					price: obj.price,
					picture: obj.picture,
					addons: obj.addons,
					original: obj
				};
				service.total_price += cartObject.qty * cartObject.price;
				service.order_details.push(cartObject);
				service.total_quantity += 1;
			}

			PubSub.publish('cart:added', cartObject);

			storeCartToSession();
		}

		function storeCartToSession() {
			session.setItem(storeKey, {
				order_details: service.order_details,
				merchantId: service.merchantId,
				merchantDetails: service.merchantDetails,
				total_price: service.total_price,
				total_quantity: service.total_quantity
			});
		}

		function getCartFromSession() {
			var data = {
				order_details: [],
				merchantId: '',
				merchantDetails: {},
				total_price: 0,
				total_quantity: 0
			};
			return session.getItem(storeKey) || data;
		}

		function remove(item_id) {
			var index = _.findIndex(service.order_details, {item_id: item_id});

			if (index !== -1) {
				var save = service.order_details[index];
				service.total_price -= save.qty * save.price;
				delete service.order_details[index];
				service.total_quantity -= 1;
				PubSub.publish('cart:removed', save);

				storeCartToSession();
			}
		}

		function get(item_id) {
			var index = _.findIndex(service.order_details, {item_id: item_id});

			if (index != -1) {
				return service.order_details[index];
			}
			return false;
		}

		function init() {
			var data = getCartFromSession();
			service.total_price = data.total_price || 0;
			service.total_quantity = data.total_quantity || 0;
			service.order_details = data.order_details || [];
			service.merchantId = data.merchantId || '';
			service.merchantDetails = data.merchantDetails || {};
		}

		function clear() {
			service.total_price = 0;
			service.total_quantity = 0;
			service.order_details.length = 0;
			service.merchantId = '';
			service.merchantDetails = {};
			storeCartToSession();	
		}

		function process() {
			var data = getCartFromSession();
			for(var i=0;i<data.order_details.length;i++) {
				PubSub.publish('cart:added', data.order_details[i]);				
			}
		}

		init();

		return service;

	}
})();
/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services')
        .constant('EVENTS', {
        	ORDER_PLACED: 'order-placed'
        });
})();
/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('GeoService', GeoService);

	GeoService.$inject = ['$http', 'RouteConfig'];

	function GeoService($http, RouteConfig) {
		var apiBase = RouteConfig.apiBase;
		var service = {};
		service.getCountries = getCountries;
		service.getStates = getStates;
		service.getCities = getCities;

		function getCountries(str) {
			var params = {
				params: {
					search: str
				}
			};

			var url = apiBase + '/countries';
			return $http.get(url, params);
		}

		function getStates(data) {
			var params = {
				params: data
			};

			var url = apiBase + '/states';
			return $http.get(url, params);
		}

		function getCities(data) {
			var params = {
				params: data
			};

			var url = apiBase + '/cities';
			return $http.get(url, params);
		}

		return service;
	}
})();
/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('Location', Location);
	
	Location.$inject = [];

	function Location() {
		var location = {};
		location.status = false;
		location.data = "";
		location.current = {};
		location.current.place = "";
		location.current.keyword = '';
		return location;
	}
})();
/*
*
*/
;(function() {
	'use strict';

	angular.module('litewait.services').factory('MenuService', MenuService);

	angular.$inject = ['$http', 'RouteConfig'];

	function MenuService($http, RouteConfig) {
		var apiBase = RouteConfig.apiBase + '/menu';
		var service = {};
		service.getByMerchantId = getByMerchantId;
		service.uploadByExcel = uploadByExcel;
		service.addCategory = addCategory;
		service.updateCategory = updateCategory;
		service.checkCategoryExists = checkCategoryExists;
		service.deleteCategory = deleteCategory;
		service.getCategoryByMerchantId = getCategoryByMerchantId;
		service.getCategoryByMandCId = getCategoryByMandCId;
		service.getCategoryByMandMId = getCategoryByMandMId;
		service.getByMandC = getByMandC;
		service.featuredByMerchant = featuredByMerchant;
		service.deleteMenu = deleteMenu;
		service.update = update;
		service.add = add;

		function addCategory(data) {
			var params = [{
				category_name: data.category_name
			}];
			var url = apiBase + '/category?merchant_id=' + data.merchant_id;

			return $http.post(url, params);
		}

		function updateCategory(data) {
			var params = [{
				id: data.category_id,
				category_name: data.category_name
			}];
			var url = apiBase + '/category?merchant_id='+data.merchant_id;

			return $http.put(url, params);
		}

		function deleteCategory(data) {
			var params = {
				params: {
					merchant_id: data.merchant_id,
					category_id: data.category_id
				}
			};
			var url = apiBase + '/category';

			return $http.delete(url, params);
		}

		function checkCategoryExists(data) {
			var params = {params: {
					merchant_id: data.merchant_id,
					category_name: data.category_name
				}
			};
			var url = apiBase + '/category/nameAvailability';
			if (data.category_id) {
				params.params.category_id = data.category_id;
			}

			return $http.get(url, params);
		}

		function getCategoryByMandCId(data) {
			var url = apiBase + '/category';
			var params = {
				params: {
					merchant_id: data.merchant_id,
					category_id: data.category_id
				}
			};

			return $http.get(url, params);
		}

		function getCategoryByMandMId(data) {
			var url = apiBase + '/category/item/details';
			var params = {
				params: {
					merchant_id: data.merchant_id,
					item_id: data.item_id
				}
			};

			return $http.get(url, params);
		}

		function add(data) {
			var url = apiBase + '/category/items';
			var params = {
				merchant_id: data.merchant_id,
				menu_items: []
			};
			delete data.merchant_id;
			params.menu_items.push(data);
			return $http.post(url, params);
		}

		function update(data) {
			var url = apiBase + '/category/items';
			var params = {
				merchant_id: data.merchant_id,
				menu_items: []
			};
			delete data.merchant_id;
			params.menu_items.push(data);
			return $http.put(url, params);
		}

		function deleteMenu(data) {
			var params = {
				params: data
			};

			var url = apiBase + '/category/items';

			$http.delete(url, params);
		}

		function featuredByMerchant(id) {
			var data = {
				params: {
					merchant_id: id
				}
			};

			var url = apiBase + '/items/featured';

			return $http.get(url, data);
		}

		function getByMerchantId(id) {
			var data = {
					params: id
				};

			return $http.get(apiBase, data).then(function(res) {
				var objArr = [];
				var data = res.data.data;
				if (!res.data.error) {
					return formatMenu(data);
				} else {
					return [];
				}
			});
		}

		function formatMenu(data) {
			var objArr = [];
			for (var i = 0; i < data.menu_items.length; i++) {
				var menu_item = data.menu_items[i];
				var obj = {
                    addons: menu_item.addons,
					item_id: menu_item.item_id,
					item_name: menu_item.item_name,
					description: menu_item.description,
					price: menu_item.price,
					merchant_id: data.merchant_id,
					category_id: menu_item.category_id,
					category_name: menu_item.category_name || ''
				};

				objArr.push(obj);
			}
			return objArr;
		}

		function uploadByExcel() {

		}

		function getCategoryByMerchantId(id) {
			var url = apiBase + '/category';
			var data;
			if (!angular.isObject(id)) {
				data = {
					params: {
						merchant_id: id
					}
				};
			} else {
				data = {
					params: id
				};
			}

			return $http.get(url, data);
		}

		function getByMandC(data) {
			var url = apiBase + '/category/items';
			var params = {
				params: {
					merchant_id: data.merchant_id,
					category_id: data.category_id
				}
			};

			return $http.get(url, params);
		}

		return service;
	}
})();

/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('Merchant', Merchant);

	Merchant.$inject = ['$http', '$q', 'RouteConfig'];

	function Merchant($http, $q, RouteConfig) {
		var urlBase = RouteConfig.apiBase + '/merchant';
		var obj = {};

		obj.get = get;
		obj.update = update;
		obj.add = add;
		obj.deleteMerchant = deleteMerchant;
		obj.getList = getList;

		function get(id) {
			var params = {
				params: {
					id: id
				}
			};

			return $http.get(urlBase, params);
		}

		function deleteMerchant(id) {
			var data = {params: id};
			return $http.delete(urlBase, data);
		}

		function update(data) {
			delete data.username;
			delete data.password;
			delete data.contact.cityId;
			delete data.contact.stateId;
			delete data.contact.countryId;
			if (typeof data.user_name != undefined) {
				delete data.user_name;
			}
			if (typeof data.user_type != undefined) {
				delete data.user_type;
			}

			if (typeof data.contact.address_2 != undefined) {
				delete data.contact.address_2;
			}
			return $http.put(urlBase, data);
		}

		function add(data) {

			delete data.contact.cityId;
			delete data.contact.stateId;
			delete data.contact.countryId;
			
			return $http.post(urlBase, data);
		}

		function getList(data) {
			var params = {
				params: data
			};
			var url = urlBase + 's';
			return $http.get(url, params).then(function(response) {
				if (!response.data.error) {
					if (response.data.data) {
						return response.data.data;
					} else {
						return {merchants: []};
					}
				}

				return {merchants:[]};
			});
		}

		return obj;
	}
})();
/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('OrderService', OrderService);

	OrderService.$inject = ['$http', 'RouteConfig'];

	function OrderService($http, RouteConfig) {
		var service = {};
		var apiBase = RouteConfig.apiBase + '/order/search';
		service.get = get;
		service.getById = getById;
		service.changeStatus = changeStatus;
		service.placeOrder = placeOrder;

		function changeStatus(data) {
			var params = {
				params: data
			};

			var url = RouteConfig.apiBase + '/order/changeStatus?status='+data.status+'&order_id='+data.order_id;
			return $http.put(url);
		}

		function getById(id) {
			var params = {
				params: {
					order_id: id
				}
			};

			return $http.get(apiBase, params);
		}

		function get(data) {
			var url = apiBase + '?offset='+data.offset+'&limit='+data.limit;
			var params = {
				status: data.status
			};
			return $http.post(url, data.status);
		}

		function placeOrder(data) {
			var url = RouteConfig.apiBase + '/order';
			return $http.post(url, data);
		}

		return service;
	}
})();
/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('OrderStatus', OrderStatus);

	OrderStatus.$inject = [];

	function OrderStatus() {
		return {
			nextStatus: {
				"New": {
					label: "In Progress",
					key: 2
				},
				"In Progress": {
					label: "Ready To Pickup",
					key: 3
				},
				"Ready to Pickup": {
					label: "Complete",
					key: 4
				},
			}
		};
	}
})();
/**
 *
 */
;(function (angular) {
    'use strict';
    angular.module('litewait.services').factory('PubSub', PubSub);

    PubSub.$inject = ['$q', '$rootScope'];

    function PubSub($q, $rootScope) {

        return {

            publish: function(name, args) {

                if (!$rootScope.$$listeners[name]) {
                    return $q.when([]);
                }
                
                var deferred = [];
                for (var i = 0; i < $rootScope.$$listeners[name].length; i++) {
                    deferred.push($q.defer());
                }
                
                var eventArgs = {
                    args: args,
                    reject: function(a) {
                        deferred.pop().reject(a);
                    },
                    resolve: function(a) {
                        deferred.pop().resolve(a);
                    }
                };

                $rootScope.$emit(name, eventArgs);

                var promises = _.map(deferred, function(p) {
                    return p.promise;
                });
                return promises;
            },

            subscribe: function(name, callback, context) {
                var unsubscribeFn  =  $rootScope.$on(name, callback),
                    result = unsubscribeFn;

                if (context && angular.isFunction(context.$on)){
                    context.$on('$destroy', function(){
                        unsubscribeFn();
                    });
                    result = function(){};
                }
                return result;
            },

            unsubscribe: function(handle) {
                if (angular.isFunction(handle)) {
                    handle();
                }
            }
        };
    }
})(angular);



/*
*
*/
;(function() {
    'use strict';
    angular.module('litewait.services').factory('RatingService', RatingService);

    RatingService.$inject = ['RouteConfig', '$http'];

    function RatingService(RouteConfig, $http) {
        var apiBase = RouteConfig.apiBase;
        var service = {};

        service.add = add;

        function add(data) {
            var url = apiBase + '/ratingfeedback';
            return $http.post(url, data);
        }

        return service;
    }
})();

/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('ReviewService', ReviewService);

	ReviewService.$inject = ['$http', 'RouteConfig'];

	function ReviewService($http, RouteConfig) {
		var service = {};
		var apiBase = RouteConfig.apiBase + '/merchantratings';

		service.getMerchantReviews = getMerchantReviews;

		function getMerchantReviews(data) {
			var params = {
				params: data
			};
			return $http.get(apiBase, params);
		}

		return service;
	}
})();
/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.services').factory('Search', Search);

	Search.$inject = ['$http', '$q', 'RouteConfig'];

	function Search($http, $q, RouteConfig) {
		var urlBase = RouteConfig.apiBase + '/search';
		var search = {};

		search.getRegions = getRegions;
		search.getRegionByIP = getRegionByIP;
		search.getRegionByGeo = getRegionByGeo;
		search.getMerchantList = getMerchantList;
		search.getKeywords = getKeywords;

		function getRegions(str) {
			var url = urlBase + '?cityregion=' + str;
			return $http.get(url).then(function(response) {
				if (!response.data.error) {
					return response.data.data;
				}
				return [];
			});
		}

		function getKeywords(params) {
			var data = {params: params};
			var url = urlBase;// + 'items?region_id=5540de6bb01cc3100320ff05&city_id=5540de6bb01cc3100320ff04&search_text=z';
			return $http.get(url, data).then(function(response) {
				if (!response.data.error) {
					return response.data.data;
				}
				return [];
			});
		}

		function getRegionByIP() {
			var url = urlBase + '?type=ipaddress';
			return $http.get(url).then(function(response) {
				if (!response.data.error) {
					return response.data.data;
				}
				return [];
			});
		}

		function getRegionByGeo() {
			return getLocation().then(function(position) {
				var url = urlBase;
				var params = {
					params: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude
					}
				};

				return $http.get(url, params);
			});
		}

		function getMerchantList(params) {
			//var queryString = angular.param(params);
			var data = {params: params};
			var url = urlBase;// + 'merchant?region_id=5540de6bb01cc3100320ff05&city_id=5540de6bb01cc3100320ff04&search_text=y&page_no=1&page_size=10';
			return $http.get(url, data).then(function(response) {
				if (!response.data.error) {
					return response.data.data;
				}

				return [];
			});
		}

		function getLocation() {
			var deferred = $q.defer();
			if ( ! navigator.geolocation) {
				deferred.reject(false);
				return deferred.promise;
			}

			navigator.geolocation.getCurrentPosition(getPosition,failed);

			function getPosition(position) {
				deferred.resolve(position);
			}

			function failed(error) {
				deferred.reject(error);
			}

			return deferred.promise;
		}

		return search;
	}
})(angular);
/*
*
*/
;(function() {
	'use strict';

	angular.module('litewait.services').factory('session', session);

	session.$inject = ['$window'];

	function session($window) {
		var service = {};
		var storage = $window.sessionStorage;

		service.setItem = function(key, val) {
			storage.setItem(key, angular.toJson(val));
		};

		service.getItem = function(key) {
			var data;
			try {
				data = angular.fromJson(storage.getItem(key));
			} catch(e) {
				data = storage.getItem(key);
			}

			return data;
		};

		service.removeItem = function(key) {
			storage.removeItem(key);
		};

		service.clear = function() {
			var i = storage.length;
			while(i--) {
			  var key = storage.key(i);
			  storage.removeItem(key);
			}
		};

		return service;
	}
})();
/**
 * created by kanagu on 11/05/2015
 */
;(function (angular) {
  'use strict';

  var SPINING_EVENTS = {
    'SPINING': 'http-request-loading'
  };

  function Spinner($q) {
    return {
      spinner: {
        promise: $q.when([]),
        message: 'System is loading, please wait.',
        backdrop: true,
        templateUrl: 'html/spinner.html',
        delay: 1000,
        wrapperClass: ''
      },
      spining: function (data) {
        this.spinner.promise = data.promise || $q.when([]);
      }
    };
  }

  function SpinnerConfig($provide, LOADING_EVENTS) {
    function HttpEvents() {
      EventEmitter2.call(this);
    }

    HttpEvents.prototype = Object.create(EventEmitter2.prototype);

    HttpEvents.prototype.requestInitiated = function (data) {
      this.emit(SPINING_EVENTS.SPINING, data);
    };

    var httpEvent = new HttpEvents();
    $provide.value('HTTPEvent', httpEvent);

    $provide.decorator('$http', function ($delegate) {

      var $http = $delegate;
      var wrapper = function () {
        return $http.apply($http, arguments);
      };

      Object.keys($http).filter(function (key) {
        return (typeof $http[key] !== 'function');
      }).forEach(function (key) {
        wrapper[key] = $http[key];
      });

      Object.keys($http).filter(function (key) {
        return (typeof $http[key] === 'function');
      }).forEach(function (key) {
        wrapper[key] = function () {
          var promise = $http[key].apply($http, arguments);
          var request = arguments[1] || {};
          var data = {
            request: request,
            promise: promise
          };

          httpEvent.requestInitiated(data);
          return promise;
        };
      });

      return wrapper;
    });
  }

  Spinner.$inject = ['$q'];
  SpinnerConfig.$inject = ['$provide', 'SPINING_EVENTS'];

  angular.module('litewait').factory('Spinner', Spinner)
    .constant('SPINING_EVENTS', SPINING_EVENTS)
    .config(SpinnerConfig);

})(angular);

/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('ShopDetailMenuCtrl', ShopDetailMenuCtrl);

	ShopDetailMenuCtrl.$inject = ['$scope', '$state', '$uibModal', '$stateParams', 'PubSub', 'Merchant', 'MenuService', 'User', 'CartService'];

	function ShopDetailMenuCtrl($scope, $state, $uibModal, $stateParams, PubSub, Merchant, MenuService, User, CartService) {
		var vm = this;
		vm.nest = {};
		vm.nest.merchantDetail = {};
		vm.nest.merchantId = $stateParams.id;
		vm.getMenuByMandC = getMenuByMandC;
		vm.addToCart = addToCart;
		vm.openCartModal = openCartModal;
        vm.nest.rating = 0;
		$scope.menu = {};

        vm.openRatingModel = function() {
            $scope.nest = vm.nest;
            var modalInstance = $uibModal.open({
                templateUrl: 'ratingModal.html',
                backdrop: 'static',
                size: 'lg',
                windowClass: 'menu-modal',
                keyboard: false,
                scope: $scope,
                bindToController: true,
                controllerAs: 'ratingModal',
                controller: function($scope, $uibModalInstance, RatingService, User) {
                    var vm = this;
                    vm.nest = $scope.nest;
                    vm.close = close;
                    vm.data = {
                        user: User.username,
                        merchant: vm.nest.merchantDetail.username,
                        rating: vm.nest.rating,
                        comment: ''
                    };

                    vm.addRating = addRating;

                    function addRating() {
                        RatingService.add(vm.data).then(function(response) {
                            if (response.data.error) {
                                $scope.nest.rating = response.data.data.rating;
                            }
                        });
                        close();
                    }

                    function close() {
                        $scope.nest.rating = $scope.nest.merchantDetail.rating;
                        $uibModalInstance.close();
                    }
                }
            });
        };

		function openCartModal(data) {
			var menu = angular.copy(data);
			if (!User.isLoggedIn) {
				PubSub.publish('open:login');
				return;
			}

			var cartmenu = CartService.get(menu.item_id);
			if (cartmenu) {
				menu.qty = cartmenu.qty;
				menu.isCart = true;
			} else {
				menu.qty = 1;
				menu.isCart = false;
			}

			$scope.menu = menu;
			$scope.nest = vm.nest;
			var modalInstance = $uibModal.open({
                templateUrl: 'cartModal.html',
                backdrop: 'static',
                size: 'lg',
                windowClass: 'menu-modal',
                keyboard: false,
                scope: $scope,
                bindToController: true,
                controllerAs: 'cartModal',
                controller: function($scope, $uibModalInstance, CartService) {
                    var vm = this;
                    vm.nest = $scope.nest;
                    vm.menu = angular.copy($scope.menu);

                    vm.addToCart = addToCart;
                    vm.close = close;

                    function addToCart() {
                    	CartService.add(vm.menu, vm.nest.merchantDetail);
                    	close();
                    }

                    function close() {
                    	$uibModalInstance.close();
                    }
                }
            });
		}

		function addToCart(obj) {
			if (!User.isLoggedIn) {
				PubSub.publish('open:login');
				return;
			}

			CartService.add(obj, vm.nest.merchantId);
		}

		function getMerchant(id) {
			Merchant.get(id).then(function(response) {
				vm.nest.merchantDetail = response.data.data;
                vm.nest.rating = vm.nest.merchantDetail.rating;
				vm.nest.merchantDetail.categories = [];
				vm.nest.merchantId = vm.nest.merchantDetail.id;
				return MenuService.getCategoryByMerchantId(vm.nest.merchantId);
			}).then(function(response) {
				if (!response.data.error) {
					vm.nest.merchantDetail.categories = response.data.data.item_categories || [];
					if (vm.nest.merchantDetail.categories.length) {
						for(var i=0;i<vm.nest.merchantDetail.categories.length; i++) {
							vm.nest.merchantDetail.categories[i].menu_items = [];
						}
						PubSub.publish('getfirstmenu', vm.nest.merchantDetail.categories[0]);
					}
				}
			});
		}

		function getMenuByMandC(category_id) {
			var data = {
				category_id: category_id,
				merchant_id: vm.nest.merchantId
			};

			var index = _.findIndex(vm.nest.merchantDetail.categories, {id: category_id+''});
			if (index !== -1 && vm.nest.merchantDetail.categories[index].menu_items.length === 0) {
				MenuService.getByMandC(data).then(function(res) {

					vm.nest.merchantDetail.categories[index].menu_items = res.data.data.menu_items || [];
					CartService.process();
				});
			}
			console.log(vm.nest);

		}

		if (vm.nest.merchantId) {
			getMerchant(vm.nest.merchantId);
		}

		function processCartRemove(data) {
			var cindex = _.findIndex(vm.nest.merchantDetail.categories, {id: data.category_id+''});
			if (cindex !== -1) {
				var category = vm.nest.merchantDetail.categories[cindex];
				var index = _.findIndex(category.menu_items, {item_id: data.item_id});
				if (index !== -1) {
					vm.nest.merchantDetail.categories[cindex].menu_items[index].isCart = false;
					vm.nest.merchantDetail.categories[cindex].menu_items[index].qty = '';
				}
			}
		}

		function processCartAdd(data) {
			var cindex = _.findIndex(vm.nest.merchantDetail.categories, {id: data.category_id+''});
			if (cindex !== -1) {
				var category = vm.nest.merchantDetail.categories[cindex];
				var index = _.findIndex(category.menu_items, {item_id: data.item_id});
				if (index !== -1) {
					vm.nest.merchantDetail.categories[cindex].menu_items[index].isCart = true;
					vm.nest.merchantDetail.categories[cindex].menu_items[index].qty = data.qty;
				}
			}
		}

		PubSub.subscribe('getfirstmenu', function(event, obj) {
			var category_id = obj.args.id;
			getMenuByMandC(category_id);
		});

		PubSub.subscribe('cart:added', function(event, obj) {
			var data = obj.args;
			processCartAdd(data);
		});

		PubSub.subscribe('cart:removed', function(event, obj) {
			var data = obj.args;
			processCartRemove(data);
		});
	}
})();


;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('shop', {
                abstract: true
            })
            .state('shop.detail', {
            	url: "/shop/:id",
                views: {
                    "@": {
                        templateUrl: "shop/shop-detail-menu.html",
                        controller: "ShopDetailMenuCtrl",
                        controllerAs: "sdm"
                    }
                },
                params: {id: ''},
                resolve: {
                    authentication: function (User, $state, $timeout) {
                        if (!User.isLoggedIn) return true;
                        if (User.isLoggedIn && User.role == 'm') {
                            var handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('merchant');
                            }, 0);
                        }
                    }
                }
            });
    }
})(angular);

/*
 *
 */
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('ChpwdCtrl', ChpwdCtrl);

	ChpwdCtrl.$inject = ['$scope', 'AUTH_PROPS', 'User', 'authentication'];

	function ChpwdCtrl($scope, AUTH_PROPS, User, authentication) {
		var vm = this;
		vm.pwd = {
			old_password: '',
			new_password: '',
			confirm_password: '',
			passwordPattern: AUTH_PROPS.PASSWORD_PATTERN
		};

		vm.changePassword = changePassword;
		vm.resetForm = resetForm;

		function changePassword(valid) {
			if (valid) {
				var data = {};
				data.old_password = vm.pwd.old_password;
				data.new_password = vm.pwd.new_password;
				data.user_type = User.role;

				vm.user.changePassword(data).then(function(response) {
					if (!(response.data.error || response.error)) {
						toaster.pop({
                            type: 'success', 
                            title:'Success', 
                            body: AUTH_MSG.chPwdSuccess, 
                            toasterId: 1
                        });
					} else {
						toaster.pop({
                            type: 'error', 
                            title:'Error', 
                            body: AUTH_MSG.chPwdFailed, 
                            toasterId: 1
                        });
					}

					vm.resetForm();
				}, function() {
					vm.resetForm();
				});
			}
		}

		function resetForm() {
			vm.chPwdForm.reset();
			vm.pwd.old_password = '';
			vm.pwd.new_password = '';
			vm.pwd.confirm_password = '';
		}
	}
})(angular);
/*
 *
 */
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['Merchant', '$scope', 'User', '$state', 'toaster', 'AUTH_MSG', 'MSG', 'AUTH_PROPS', 'GeoService', 'authentication'];

	function ProfileCtrl(Merchant, $scope, User, $state, toaster, AUTH_MSG, MSG, AUTH_PROPS, GeoService, authentication) {
		var vm = this;
        vm.dateOptions = {
            minMode: 'month',
            datepickerMode: 'month'
        };
		vm.AUTH_PROPS = AUTH_PROPS;
		vm.user = User;
		vm.geo = {
			country: {name: '', id: ''},
			state: {name: '', id: ''},
			city: {name: '', id: ''}
		};
		vm.profile = {
			user_name: '',
			contact: {
				address_1: '',
				address_2: '',
				phone: '',
				city: '',
				state: '',
				country: '',
				zip_code: '',
				mail_id: ''
			},
			user_type: ''
		};

		vm.payment = {
			card_type: '',
			card_number: '',
			card_name: '',
			card_expiry: '',
			cvv: '',
			contact: {
				address_1: '',
				city: '',
				state: '',
				zip_code: ''
			}
		};

		vm.pay = {
			opened: false,
			onOpenFocus: true
		};

		// functions exposed to view
		vm.updateProfile = updateProfile;
		vm.assignProfile = assignProfile;
		vm.cancel = cancel;
		vm.savePayment = savePayment;
		vm.assignPayment = assignPayment;
		vm.open1 = open1;
		vm.getCountries = getCountries;
		vm.getStates = getStates;
		vm.getCities = getCities;
		vm.onSelectCountry = onSelectCountry;
		vm.onSelectState = onSelectState;
		vm.onSelectCity = onSelectCity;

		function onSelectCountry() {
			vm.profile.contact.country = vm.geo.country.name;
			vm.profile.contact.countryId = vm.geo.country.id;
		}

		function onSelectState() {
			vm.profile.contact.state = vm.geo.state.name;
			vm.profile.contact.stateId = vm.geo.state.id;
		}

		function onSelectCity() {
			vm.profile.contact.city = vm.geo.city.name;
			vm.profile.contact.cityId = vm.geo.city.id;
		}

		function getCountries(str) {
			return GeoService.getCountries(str).then(function(res) {
				var a = [];
				if (!res.data.error && res.data.data !== null) {
					for (var i=0;i<res.data.data.length;i++) {
						a.push({
							id: res.data.data[i].id,
							name: res.data.data[i].name
						});
					}
					return a;
				}
				return [];
			});
		}

		function getStates(str) {
			if (vm.profile.contact.countryId) {
				var params = {
					search: str,
					country: vm.geo.country.name
				};

				return GeoService.getStates(params).then(function(res) {
					var a = [];
					if (!res.data.error && res.data.data !== null) {
						for (var i=0;i<res.data.data.length;i++) {
							a.push({
								id: res.data.data[i].id,
								name: res.data.data[i].name
							});
						}
						return a;
					}
					return [];
				});
			}
			return [];
		}

		function getCities(str) {
			if (vm.profile.contact.stateId) {
				var params = {
					search: str,
					country: vm.geo.country.name,
					state: vm.geo.state.name
				};

				return GeoService.getCities(params).then(function(res) {
					var a = [];
					if (!res.data.error && res.data.data !== null) {
						for (var i=0;i<res.data.data.length;i++) {
							a.push({
								id: res.data.data[i].city_name,
								name: res.data.data[i].city_name
							});
						}
						return a;
					}
					return [];
				});
			}
			return [];
		}

		function open1() {
			vm.pay.opened = true;
		}

		function updateProfile(valid) {
			if (valid) {
				if (User.role == 'm') {
					Merchant.update(vm.profile).then(function(response) {
						if (!(response.error)) {
							toaster.pop({
	                            type: 'success',
	                            title:'Success',
	                            body: MSG.merchantUpdateSuccess,
	                            toasterId: 1
	                        });
						} else {
							toaster.pop({
	                            type: 'error',
	                            title:'Error',
	                            body: MSG.merchantUpdateFailed,
	                            toasterId: 1
	                        });
						}
					});
				} else {
					vm.user.updateProfile(vm.profile).then(function(response) {
						if (!(response.data.error || response.error)) {
							toaster.pop({
	                            type: 'success',
	                            title:'Success',
	                            body: AUTH_MSG.profileUpdateSuccess,
	                            toasterId: 1
	                        });
						} else {
							toaster.pop({
	                            type: 'error',
	                            title:'Error',
	                            body: AUTH_MSG.profileUpdateFailed,
	                            toasterId: 1
	                        });
						}
					});
				}
			}
		}

		function assignProfile() {
			vm.profile.user_name = vm.user.data.username || vm.user.data.user_name;
			vm.profile.contact.address_1 = vm.user.data.contact.address_1;
			vm.profile.contact.phone = vm.user.data.contact.phone;
			vm.geo.city.name = vm.profile.contact.city = vm.user.data.contact.city;
			vm.geo.city.id = vm.profile.contact.cityId = vm.user.data.contact.cityId || '';
			vm.geo.state.name = vm.profile.contact.state = vm.user.data.contact.state;
			vm.geo.state.id = vm.profile.contact.stateId = vm.user.data.contact.stateId || '';
			vm.geo.country.name = vm.profile.contact.country = vm.user.data.contact.country;
			vm.geo.country.id = vm.profile.contact.countryId = vm.user.data.contact.countryId || '';
			vm.profile.contact.zip_code = vm.user.data.contact.zip_code;
			vm.profile.contact.mail_id = vm.user.data.contact.mail_id;
			vm.profile.user_type = User.role;

			if (User.role == 'm') {
				vm.profile.id = vm.user.data.id;
				vm.profile.username = vm.user.data.username;
				vm.profile.business_name = vm.user.data.business_name;
				vm.profile.business_type = vm.user.data.business_type;
				vm.profile.contact_person = vm.user.data.contact_person;
				vm.profile.region = vm.user.data.region;
				vm.profile.region_id = vm.user.data.region_id;
				vm.profile.city = vm.user.data.city;
				vm.profile.city_id = vm.user.data.city_id;
				vm.profile.open_time = vm.user.data.open_time;
				vm.profile.close_time = vm.user.data.close_time;
				vm.profile.avg_waiting_time = vm.user.data.avg_waiting_time;
				vm.profile.photo = vm.user.data.photo;
				vm.profile.website = vm.user.data.website;
				vm.profile.is_active = vm.user.data.is_active;
			}
		}

		function assignPayment(paymentConfig) {
			//var paymentConfig = userPayment.data.paymentConfig;
			vm.payment.card_type = paymentConfig.card_type;
			vm.payment.card_number = paymentConfig.card_number;
			vm.payment.card_name = paymentConfig.card_name;
			vm.payment.card_expiry = new Date(parseInt(paymentConfig.card_expiry));
			vm.payment.cvv = paymentConfig.cvv;
			vm.payment.contact.address_1 = paymentConfig.card_address.address_1;
			vm.payment.contact.city = paymentConfig.card_address.city;
			vm.payment.contact.state = paymentConfig.card_address.state;
			vm.payment.contact.zip_code = paymentConfig.card_address.zip_code;
		}

		function savePayment(valid) {
			if (valid) {
				var data = angular.copy(vm.payment);
				data.card_expiry = formatDate(data.card_expiry);
				vm.user.updatePayment(data).then(function(response) {
					if (!(response.data.error || response.error)) {
						toaster.pop({
                            type: 'success',
                            title:'Success',
                            body: AUTH_MSG.paymentUpdateSuccess,
                            toasterId: 1
                        });
					} else {
						toaster.pop({
                            type: 'error',
                            title:'Error',
                            body: AUTH_MSG.paymentUpdateFailed,
                            toasterId: 1
                        });
					}
				});
			}
		}

		function formatDate(dateasms) {
			var date = new Date(dateasms);
			var month = date.getMonth() + 1;
			month = (month < 10) ? "0" + month : month;
			var year = date.getFullYear();
			return month + "/" + year;
		}


		function cancel(event) {
			event.preventDefault();
			$state.go('home');
		}

		vm.assignProfile();

		if (User.data.paymentConfig) {
			vm.assignPayment(User.data.paymentConfig);
		}
	}
})(angular);


;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('user', {
                abstract: true
            })
            .state('user.profile', {
            	url: "/profile",
                views: {
                    "@": {
                        templateUrl: "user/profile.html",
                        controller: "ProfileCtrl",
                        controllerAs: "epc"
                    }
                },
                resolve: {
                    authentication: function (AuthService, $q, $timeout) {
                        var deferred = $q.defer();

                        var handler = $timeout(function() {
                            var auth = AuthService.isAuthenticated();
                            if (auth) {
                                deferred.resolve(true);
                            } else {
                                deferred.reject(true);
                            }
                            $timeout.cancel(handler);
                        }, 0);

                        return deferred.promise;
                    }
                }
            }).state('user.chpwd', {
                url: "/change-password",
                views: {
                    "@": {
                        templateUrl: "user/ch-pwd.html",
                        controller: "ChpwdCtrl"
                    }
                },
                resolve: {
                    authentication: function (AuthService, $q, $timeout) {
                        var deferred = $q.defer();

                        var handler = $timeout(function() {
                            var auth = AuthService.isAuthenticated();
                            if (auth) {
                                deferred.resolve(true);
                            } else {
                                deferred.reject(true);
                            }
                            $timeout.cancel(handler);
                        }, 0);

                        return deferred.promise;
                    }
                }
            }).state('user.verify', {
                url: "/verify/:code",
                views: {
                    "@": {
                        templateUrl: "user/verify-email.html",
                        controller: "VerifyUserCtrl",
                        controllerAs: "vusr"
                    }
                },
                resolve: {
                    verify: function($stateParams, $q, $timeout, User) {
                        var deferred = $q.defer();
                        var code = $stateParams.code || '';
                        var handler = $timeout(function() {
                            if (code) {
                                var verified = User.verifyUser(code).then(function(response) {
                                    deferred.resolve(response.data);
                                }, function (error) {
                                    deferred.resolve({
                                        error: true,
                                        message: 'User verification failed'
                                    });
                                });

                            } else {
                                deferred.resolve({
                                    error: true,
                                    message: 'Could not able to verify user without verification code'
                                });
                            }

                            $timeout.cancel(handler);
                        });

                        return deferred.promise;
                    }
                }
            });
    }
})(angular);

/*
*
*/
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('VerifyUserCtrl', VerifyUserCtrl);

	VerifyUserCtrl.$inject = ['$scope', 'verify'];

	function VerifyUserCtrl($scope, verify) {
		var vm = this;

		vm.data = verify;
	}
})(angular);
