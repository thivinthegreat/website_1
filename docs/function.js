function loadMore() {
    document.getElementById("hidden").style.display = "block";
    document.getElementById("btnLoadMore").style.display = "none";
    document.getElementById("btnShowLess").style.display = "flex";
}

function showLess() {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("btnLoadMore").style.display = "flex";
    document.getElementById("btnShowLess").style.display = "none";
}