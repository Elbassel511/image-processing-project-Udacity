let data = {};
const container = document.getElementById('container');

window.onload = async () => {
    const answer = await fetch('/listOfImages');
    try {
        data = await answer.json();
        let filesArr = data.list;
        const HTMLArr = filesArr.map(file => {
            const filename = file.split('.')[0];
            return (
                `
                <div class='card'>
                    <img src='http://localhost:3000/api?filename=${filename}&width=375&height=375'/>
                    <p>${filename}</p>
                </div>
                `
            );
        });
        container.innerHTML = HTMLArr.join('');
    } catch (err) {
        console.log(err);
    }
};



