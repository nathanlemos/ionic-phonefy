import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'phonefy',
})

export class PhonefyPipe implements PipeTransform 
{
	transform(str: string): string
	{
		return str.replace(/[\s]\+?([0-9]{2})?\s?([0-9]{2})?\s?((?:\()[0-9]{2}(?:\)))?\s?[0-9]{4,5}(?:-?)[0-9]{4}/mg, function(v1)
			{ 
				let link  = v1.replace(" ", "").replace("(", "").replace(")", "").replace("-", "");
				let texto = v1.replace(" ", "");

				return  '&nbsp;<a href="tel:' + link + '" class="linkified" target="_system">' + texto + '</a>';
			});
	}
}
