"use strict";

var _Helper = _interopRequireDefault(require("Helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Settings = function Settings(selector) {
  var _this = this;

  _classCallCheck(this, Settings);

  _defineProperty(this, "events", function () {
    _this.$buttonOpenClose.click(function () {
      _this.$component.toggleClass('_open');
    });
  });

  _defineProperty(this, "customEvents", function () {
    _this.$component.find('input[name=header_class]').change(function () {
      var $checkbox = $(this);
      var dataClass = $checkbox.data('class');
      var header = $('header');
      $checkbox.is(':checked') ? header.addClass(dataClass) : header.removeClass(dataClass);
    });
  });

  _Helper["default"].testFunction();

  this.selector = selector;
  this.$component = $(selector);
  this.$buttonOpenClose = this.$component.find('button');
  this.events();
  this.customEvents();
};

document.addEventListener('DOMContentLoaded', function () {
  new Settings('.js-settings');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNldHRpbmdzIiwic2VsZWN0b3IiLCIkYnV0dG9uT3BlbkNsb3NlIiwiY2xpY2siLCIkY29tcG9uZW50IiwidG9nZ2xlQ2xhc3MiLCJmaW5kIiwiY2hhbmdlIiwiJGNoZWNrYm94IiwiJCIsImRhdGFDbGFzcyIsImRhdGEiLCJoZWFkZXIiLCJpcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJIZWxwZXIiLCJ0ZXN0RnVuY3Rpb24iLCJldmVudHMiLCJjdXN0b21FdmVudHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBR0E7Ozs7Ozs7O0lBRU1BLFEsR0FDRixrQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtDQVViLFlBQU07QUFDWCxJQUFBLEtBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0JDLEtBQXRCLENBQTRCLFlBQU07QUFDOUIsTUFBQSxLQUFJLENBQUNDLFVBQUwsQ0FBZ0JDLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0gsS0FGRDtBQUdILEdBZHFCOztBQUFBLHdDQWdCUCxZQUFNO0FBQ2pCLElBQUEsS0FBSSxDQUFDRCxVQUFMLENBQWdCRSxJQUFoQixDQUFxQiwwQkFBckIsRUFBaURDLE1BQWpELENBQXdELFlBQVk7QUFDaEUsVUFBTUMsU0FBUyxHQUFHQyxDQUFDLENBQUMsSUFBRCxDQUFuQjtBQUNBLFVBQU1DLFNBQVMsR0FBR0YsU0FBUyxDQUFDRyxJQUFWLENBQWUsT0FBZixDQUFsQjtBQUNBLFVBQU1DLE1BQU0sR0FBR0gsQ0FBQyxDQUFDLFFBQUQsQ0FBaEI7QUFDQUQsTUFBQUEsU0FBUyxDQUFDSyxFQUFWLENBQWEsVUFBYixJQUEyQkQsTUFBTSxDQUFDRSxRQUFQLENBQWdCSixTQUFoQixDQUEzQixHQUF3REUsTUFBTSxDQUFDRyxXQUFQLENBQW1CTCxTQUFuQixDQUF4RDtBQUNILEtBTEQ7QUFNSCxHQXZCcUI7O0FBQ2xCTSxxQkFBT0MsWUFBUDs7QUFDQSxPQUFLaEIsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLRyxVQUFMLEdBQWtCSyxDQUFDLENBQUNSLFFBQUQsQ0FBbkI7QUFDQSxPQUFLQyxnQkFBTCxHQUF3QixLQUFLRSxVQUFMLENBQWdCRSxJQUFoQixDQUFxQixRQUFyQixDQUF4QjtBQUVBLE9BQUtZLE1BQUw7QUFDQSxPQUFLQyxZQUFMO0FBQ0gsQzs7QUFrQkxDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVU7QUFDcEQsTUFBSXJCLFFBQUosQ0FBYSxjQUFiO0FBQ0gsQ0FGRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4vIC89IC4uLy4uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcclxuICovXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnSGVscGVyJztcclxuXHJcbmNsYXNzIFNldHRpbmdzIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgSGVscGVyLnRlc3RGdW5jdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgICAgICB0aGlzLiRjb21wb25lbnQgPSAkKHNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLiRidXR0b25PcGVuQ2xvc2UgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21FdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4kYnV0dG9uT3BlbkNsb3NlLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdfb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjdXN0b21FdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4kY29tcG9uZW50LmZpbmQoJ2lucHV0W25hbWU9aGVhZGVyX2NsYXNzXScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjaGVja2JveCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFDbGFzcyA9ICRjaGVja2JveC5kYXRhKCdjbGFzcycpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSAkKCdoZWFkZXInKTtcclxuICAgICAgICAgICAgJGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpID8gaGVhZGVyLmFkZENsYXNzKGRhdGFDbGFzcykgOiBoZWFkZXIucmVtb3ZlQ2xhc3MoZGF0YUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gICAgbmV3IFNldHRpbmdzKCcuanMtc2V0dGluZ3MnKTtcclxufSk7Il19
