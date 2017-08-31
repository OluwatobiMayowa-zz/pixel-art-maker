// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()\

function makeGrid() {

// Your code goes here!
    const num_rows = document.getElementById('input_height').value;
    const num_cols = document.getElementById('input_width').value;
    let tbody = '';

    for( var i=0; i < num_rows; i++)
    {
        tbody += '<tr>';
        for( var j=0; j < num_cols; j++)
        {
            tbody += `<td id="cell${j}${i}" onClick="paint(this.id)">`;
            tbody += '</td>'

        }

        tbody += '</tr>';
    }
    console.log(tbody);
    document.getElementById('pixel_canvas').innerHTML = tbody;

}

function paint(id) {
    var td = document.getElementById(id)
    td.style.backgroundColor = document.getElementById("colorPicker").value;
}