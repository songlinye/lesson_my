const bubbleSort = arr => {
    console.time('冒泡排序耗时');  // 时间的计算
    const length = arr.length; // 缓存数组长度
    // 相邻     一趟循环  搞定一个位置的顺序是对的  左/右侧一定是最大值
    for(let i = 0; i < length - 1; i ++) {   // 排序轮数
        // 所有元素排序  位置上放置正确的数字
        let isSorted = true;    // 本轮默认有序
        for(let j = 0; j < length - i - 1; j ++) { // 内循环 排好一个位置后
            if(arr[j] > arr[j + 1]){
                // const temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwap = false;   // 发生交换 说明无序
            }
        }
        if(isSorted) {
            // 一次都没有发生
            break;
        }
    }
    console.timeEnd('冒泡排序耗时');
}

const arr = [5, 8, 6, 3, 9, 2, 1, 7];       // 引用式赋值   堆内存    值决定
bubbleSort(arr);
console.log(arr);