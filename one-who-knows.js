(function one_who_knows() {

    /** create by @MusiCode1 **/

    const
        conjunctions = {
            who_knows: "מי יודע",
            i_know: "אני יודע"
        },
        items = [
            "",
            ["אחד", "אלוקינו שבשמים ובארץ"],
            ["שניים", "לוחות הברית", "שני"],
            ["שלושה", "אבות"],
            ["ארבע", "אמהות"],
            ["חמישה", "חומשי תורה"],
            ["שישה", "סדרי משנה"],
            ["שבעה", "ימי שבתא"],
            ["שמונה", "ימי מילה"],
            ["תשעה", "ירחי לידה"],
            ["עשרה", "דבריא"],
            ["אחד עשר", "כוכביא"],
            ["שנים עשר", "שבטיא"],
            ["שלושה עשר", "מידיא"],
        ];

    for (let i = 1; i < items.length; i++) {

        const [num_name,] = items[i];

        console.log(num_name, conjunctions.who_knows, num_name, conjunctions.i_know);

        for (let i_repeat = i; i_repeat > 0; i_repeat--) {

            let [num_name, item] = items[i_repeat];

            if (i_repeat === 2) num_name = items[i_repeat][2];

            console.log(num_name, item);
        }
    }
})();
