//! آیتم های خرید
const shoppingList = new Set()

//! ذخیره ی نام آیتم ها و قیمت آن ها
const itemPrice = new Map()

//! افزودن آیتم به لیست خرید
function addItem (name, price) {
    if (!shoppingList.has(name)) {
        shoppingList.add(name);
        itemPrice.set(name, price)
        console.log(`${name} به لیست خرید اضافه شد `);
    }else {
        console.log(`${name} در لیست خرید موجود است `);
    }
}

//! حذف آیتم از لیست
function removeItem (name) {
    if(shoppingList.has(name)){
        shoppingList.delete(name)
        itemPrice.delete(name)
        console.log(`${name} از سبد خرید خذف شد`)
    }else {
        console.log('همچین مقداری در سبد خرید موجود نیست')
    }
}

//! نمایش آیتم ها و قیمت آنها
function showItem () {
    if(shoppingList.size === 0) {
        console.log('سبد خرید شما خالی است')
    }else {
        shoppingList.forEach(item => {
            console.log(`${itemPrice.get(item)} : ${item}`)
        })
    }
}


addItem("شیر", 32_000);
addItem("خوراکی", 55_000);
    showItem()