class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// 构造函数接受一个项数组和一个整数，该整数指示有多少项
	// 项目适合单个页面
        this.arr = collection;
        this.n = itemsPerPage;
        this.sum = Math.ceil(this.arr.length / this.n);
	}

	itemCount() {
        return this.arr.length;
	}
	pageCount() {
        return this.sum;
	// 返回页数
	}
	pageItemCount(pageIndex) {
        if(pageIndex + 1 > this.sum || pageIndex < 0) {
            return -1;
        } else if (pageIndex + 1 == this.sum) {
            return this.arr.length - (this.sum -1)*this.n;
        } else {
            return this.n;
        }
	// 返回当前页面上的项目数。page_index从零开始。
	// 对于超出范围的pageIndex值，此方法应返回-1
	}
	pageIndex(itemIndex) {
        if(itemIndex + 1 > this.arr.length || itemIndex < 0) {
            return -1;
        }
        return Math.floor(itemIndex / this.n);
	// 确定项目所在的页面。从零开始的索引
	// 对于超出范围的itemIndex值，此方法应返回-1
	}
}

var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9], 3);
console.log(helper.pageCount());
console.log(helper.pageItemCount(2));