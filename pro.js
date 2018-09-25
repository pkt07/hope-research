
var extractions = [
    {   name: "rows",
        get:  function(data,span,block,member){
                  return data[block][member];
              }
    },
    {   name: "cols",
        get:  function(data,span,block,member) {
                  return data[member][block];
              }
    },
    {   name: "minis",
        get:  function(data,span,block,member) {
                  var coloff = (block % span) * span;
                  var rowoff = (block / span) * span;
                  return data[rowoff + (member / span)][coloff + (member % span)];
              }
    },
]

function isvalid(data) {
    var size = data.length;
    var slot = Math.sqrt(size);
    for (var block = 0; block < size; block++) {
        if (data[block].length != size) {
            return false;
        }
        for (var ext = 0; ext < extractions.length; ext++) {
            var tmp = [];
            for (var member = 0; member < size; member++) {
                tmp.push(extractions[ext].get(data, slot, block, member));
            }
            for (var i = 1; i <= size; i++) {
                if (tmp.indexOf(i) < 0) {
                    return false;
                }
            }
        }
    }
    return true;
}
