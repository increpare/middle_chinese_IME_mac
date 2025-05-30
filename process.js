// generates input thing - instructions here
// https://support.apple.com/en-gb/guide/mac-help/mchlp2866/mac
// https://chinesemac.org/pages/input_methods.html

var fs = require('fs');
var result={};
var array = fs.readFileSync('database.tsv', 'utf8').toString().split("\n");

//grabbed from https://www.chinese-forums.com/forums/topic/62647-classical-chinese-frequency-list/
var frequencylist_dat = fs.readFileSync('frequencylist.tsv', 'utf8').toString().split("\n");
var frequencydict = {};
for (var i = 0; i < frequencylist_dat.length; i++) {
    var line = frequencylist_dat[i].split(/\s+/);
    frequencydict[line[1]] = parseInt(line[0]);
}

//load values from ad_hoc_doc
var ad_hoc_entries = fs.readFileSync('ad_hoc_doc.tsv', 'utf8').toString().split("\n");
console.log("loaded with " + ad_hoc_entries.length + " entries");
for (var i = 0; i < ad_hoc_entries.length; i++) {
    var value = ad_hoc_entries[i];
    //entries splits on any whitespace (space+ or tab)
    var entries = value.split(/\t+/);
    var key = entries[1];
    var value = entries[0];
    //if value is alphanumeric, skip
    if (value.match(/^[a-zA-Z0-9]+$/)) {
        continue;
    }
    array.push(value+"\t"+key);
}

for(i in array) {
    var line = array[i].split("\t");
    var value = line[0]
    var key = line[1]
    if (result[key] == undefined) {
        result[key] = [];
    }
    if (result[key].indexOf(value) == -1) {
        result[key].push(value);
    }
}

//for each value of result, sort values by frequency
for (var key in result) {
    var entries = result[key];
    entries.sort(function(a, b) {
        var afrequency = 0;
        if (frequencydict[a] != undefined) {
            afrequency = frequencydict[a];
        }
        var bfrequency = 0;
        if (frequencydict[b] != undefined) {
            bfrequency = frequencydict[b];
        }
        return bfrequency - afrequency;
    });
    result[key] = entries;
}

//write to processed.csv
var csv = '';
for (var key in result) {
    //strip opening apostrophe from key
    var mkey = key.replace(/^'/, '');
    // //convert to lower case
    // mkey = mkey.toLowerCase();
    // //replace + with U
    // mkey = mkey.replace(/\+/, 'uu');
    csv += mkey + ' ' + result[key].join(',') + '\n';
}
fs.writeFileSync('processed.csv', csv);

var sagartplugin = `# (c) Apple Inc. 2021
# Sample plug-in input source rule file.
# The # character is used to indicate comments.
# The file format must be plain text. The file encoding must be Unicode (UTF-16) with or without an initial BOM (Byte Order Mark).
# The file consists of a number of tags, in uppercase ending with a colon, followed by the content of the tag.
#
# METHOD: This is the first entry in the file, defining the method used to implement the plug-in.
# The only method currently supported is “TABLE”.
#
METHOD: TABLE
#
# ENCODE: This indicates whether the target is Traditional Chinese (“TC”), Simplified Chinese (“SC”) or Unicode (“Unicode”). All plug-in input sources appear as Unicode input sources in the Input Sources pane of Keyboard preferences.
#
ENCODE: TC
#
# PROMPT: This is the name of the plug-in, shown in the Input Sources pane of Keyboard preferences and the Input menu.
#
PROMPT: Middle_Chinese
#
# DELIMITER: This defines the delimiter for characters or phrases with the same input code.
# In this case, we are using the comma character.
#
DELIMITER: ,
#
# VERSION: This is used to indicate the version number of your plug-in.
#
VERSION: 1.0
#
# MAXINPUTCODE: The limit of the number of characters that can be input for a single conversion.
# There is no limit unless you specify one.
#
MAXINPUTCODE: 8
#
# VALIDINPUTKEY: The set of characters that can be used for input strings. These are case-insensitive but must be entered as one complete set.
#
VALIDINPUTKEY: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,,.?!,:;()<>[]{}
#
# BEGINCHARACTER: This tag begins the definitions for the mappings and is required.
# The format for each mapping is:
# ...
# Blank lines and characters are ignored.
# The delimiter between output strings is that defined above by the DELIMITER tag.
# Indicate that the mapping definitions have ended with the ENDCHARACTER tag.
#
BEGINCHARACTER
${csv}
#
# ENDCHARACTER: This terminates the mapping definitions and is the last character in the file.
#
ENDCHARACTER`

fs.writeFileSync('sagart.inputplugin', sagartplugin,'utf16le');