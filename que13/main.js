
function compareName(a, b) {
	const name1 = a.title.toUpperCase();
	const name2 = b.title.toUpperCase();
	//console.log(name1);
	//console.log(name2);
	let comparison = 0;

	if (name1 > name2) {
	    comparison = 1;
	} else if (name1 < name2) {
	    comparison = -1;
	}
	return comparison;
}

var library = [
            { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
            { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
            {
                author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID:
                    3245
            }
        ];


console.log(library.sort(compareName));
