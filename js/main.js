	$(document).ready(function () {

		$(".page__button, #call").on("click", function() {
			$(".overlay").show();
			$(".want-button").hide();
		});

		$(".modal-form__close").on("click", function() {
			$(".overlay").hide()
		});

	});