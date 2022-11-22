let apiData={
    url:'https://api.nobitex.ir/v2/trades/',
    key:'',
}
function fetchData(){
    fetch(`${apiData.url}${apiData.key}`);
}