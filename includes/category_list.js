//category list

var $filterCheckboxes = $('input[type="checkbox"]');
$filterCheckboxes.on('change', function() {
	
	var selectedFilters = {};
	$filterCheckboxes.filter(':checked').each(function() {
		
		if (!selectedFilters.hasOwnProperty(this.name)) {
			
			selectedFilters[this.name] = [];
		}
		selectedFilters[this.name].push(this.value);
	});
	var $filteredResults = $('.list');
	$.each(selectedFilters, function(name, filterValues) {
		
		$filteredResults = $filteredResults.filter(function() {
			
			var matched = false,
			currentFilterValues = $(this).data('category').split(' ');
			$.each(currentFilterValues, function(_, currentFilterValue) {
				
				if ($.inArray(currentFilterValue, filterValues) != -1) {
					
					matched = true;
					return false;
				}
			});
			return matched;
		});
	});
	$('.list').hide().filter($filteredResults).show();
});

/*checking checkboxes by clicking on li*/
$("#NavMenu:checkbox").click(function(e) {
	
	var checked = $(this).is(':checked');
    var li = $(this).closest('li');
});

/*just one select*/
$(document).ready(function () {
	
	$(".game:checkbox").click(function () {
		
		$("[name="+$(this).prop('name')+"]").prop("checked", false);
        $(this).prop("checked", true);
    });
});

/*hide #showBtn if checkbox is checked*/
$(document).ready(function () {

	$(".game, .category").change(function () {
		
		if (this.checked) {
			$('#showBtn').hide();
		}
	});
});