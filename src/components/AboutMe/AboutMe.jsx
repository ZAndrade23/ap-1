import './AboutMe.css'

function AboutMe() {
return(
    <div>
        <h1>My Mission:</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in fringilla metus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Cras volutpat elit est, sit amet pharetra felis consectetur ut. Phasellus mi mi, scelerisque ut fermentum vel,
            placerat vitae dui. Nullam ut tellus a erat tincidunt efficitur efficitur quis nisl. Cras vulputate suscipit facilisis.
             Nam finibus dapibus nulla, quis tristique dui tincidunt ac. Curabitur malesuada, diam a porta venenatis,
             lorem enim lacinia neque, in porta quam arcu vulputate justo. Fusce a mattis diam. Donec quis sapien dolor. Etiam scelerisque tellus dolor, eget sagittis ex varius lacinia.
             Morbi quis nisi eu odio bibendum faucibus ut efficitur velit. Donec malesuada pellentesque tristique.
            </p>
            <table id="pricingTable">
                <tr>
                    <th colSpan="2" id="pricingHeader">The Plan Powered By You</th>
                </tr>
                <tr>
                    <td id="pricingTd">30 Sessions</td>
                    <td id="pricingTd">50.79($1,523,70)</td>
                </tr>
                <tr>
                    <td id="pricingTd">20 Sessions</td>
                    <td id="pricingTd">55.79($1,115.80)</td>
                </tr>
                <tr>
                    <td id="pricingTd">10 Sessions</td>
                    <td id="pricingTd">60.79($607.90)</td>
                </tr>
                <tr>
                    <td id="pricingTd">5 Sessions</td>
                    <td id="pricingTd">65.79($328.95)</td>
                </tr>
                <tr>
                    <td id="pricingTd">1 Sessions</td>
                    <td id="pricingTd">$70.79</td>
                </tr>
            </table>
    </div>
)
}
export default AboutMe;