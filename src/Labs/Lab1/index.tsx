export default function Lab1() {
    return (
    <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
            <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and
                subsections. Each section is usually prefaced with a short
                title or heading that attempts to summarize the topic of the
                section it precedes. For instance this paragraph is preceded by
                the heading Heading Tags. The font of the section headings are
                usually larger and bolder than their subsection headings. This
                document uses headings to introduce topics such as HTML Documents, HTML
                Tags, Heading Tags, etc. HTML heading tags can
                be used to format plain text so that it renders in a browser as
                large headings. There are 6 heading tags for different sizes:
                h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and
                h6 is the smallest heading.
        </div>
        <div id="wd-p-tag">
            <h4>Paragraph Tag</h4>
            <p id="wd-p-1">
                This is a paragraph. We often separate a long set of sentences with
                vertical spaces to make the text easier to read. Browsers ignore vertical
                white spaces and render all the text as one single set of sentences. To
                force the browser to add vertical spacing, wrap the paragraphs you want to
                separate with the paragraph tag
            </p>
            <p id="wd-p-2">
                This is the first paragraph. The paragraph tag is used to format
                vertical gaps between long pieces of text like this one.
            </p>
            <p id="wd-p-3">
                This is the second paragraph. Even though there is a deliberate white
                gap between the paragraph above and this paragraph, by default
                browsers render them as one contiguous piece of text as shown here on
                the right.
            </p>
            <p id="wd-p-4">
            This is the third paragraph. Wrap each paragraph with the paragraph
            tag to tell browsers to render the gaps.
            </p>
        </div>
        <div id="wd-lists">
            <h4>List Tags</h4>
            <h5>Ordered List Tag</h5>
            How to make pancakes:
            <ol id="wd-pancakes">
                <li>Mix dry ingredients.</li>
                <li>Add wet ingredients.</li>
                <li>Stir to combine.</li>
                <li>Heat a skilllet or griddle.</li>
                <li>Pour batter onto the skillet.</li>
                <li>Cook until bubbly on the top.</li>
                <li>Flip and cook the other side.</li>
                <li>Serve and enjoy!</li>
            </ol>
            My favorite recipe:
            <ol id="wd-your-favorite-recipe">
                <li>Wash and cook rice.</li>
                <li>Cut spam into small cubes and cook it.</li>
                <li>Make scrambled eggs.</li>
                <li>Cut bacon into small cubes and cook it.</li>
                <li>Combine the spam, egg and bacon with the rice.</li>
                <li>Mix soy sauce and sesame oil with the fried rice.</li>
                <li>Serve and enjoy!</li>
            </ol>
            <h5>Unordered List Tag</h5>
            My favorite books (in no particular order)
            <ul id="wd-my-books">
                <li>Dune</li>
                <li>Lord of the Rings</li>
                <li>Ender's Games</li>
                <li>Red Mars</li>
                <li>The Forever War</li>
            </ul>
            Your favorite books (in no particular order)
            <ul id="wd-your-books">
                <li>Atomic Habits</li>
                <li>48 Laws of Power</li>
                <li>101 Things I Learned in Culinary School</li>
                <li>Design for Real Life</li>
            </ul>
        </div>
        <div id="wd-tables">
            <h4>Table Tag</h4>
            <table border={1} width="100%">
                <thead>
                    <tr>
                        <th>Quiz</th>
                        <th>Topic</th>
                        <th>Date</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td>HTML</td>
                        <td>2/3/21</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td>CSS</td>
                        <td>2/10/21</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td>JavaScript</td>
                        <td>2/17/21</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>Q4</td>
                        <td>Bootstrap</td>
                        <td>2/21/21</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <td>Q5</td>
                        <td>React</td>
                        <td>3/1/21</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>Q6</td>
                        <td>Routing</td>
                        <td>3/8/21</td>
                        <td>77</td>
                    </tr>
                    <tr>
                        <td>Q7</td>
                        <td>Node</td>
                        <td>3/15/21</td>
                        <td>89</td>
                    </tr>
                    <tr>
                        <td>Q8</td>
                        <td>Session</td>
                        <td>3/22/21</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Q9</td>
                        <td>MongoDB</td>
                        <td>3/29/21</td>
                        <td>97</td>
                    </tr>
                    <tr>
                        <td>Q10</td>
                        <td>Mongoose</td>
                        <td>4/5/21</td>
                        <td>91</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Average</td>
                        <td>87.9</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br/>
            <img id="wd-starship"  alt="" width="400px" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
            <br/>
            Loading a local image:
            <br/>
            <img  id="wd-teslabot" alt="" src="images/teslabot.jpg" height="200px" />
        </div>
        <div id="wd-forms">
            <h4>Form Elements</h4>
            <form id="wd-text-fields">
                <h5>Text Fields</h5>
                <label htmlFor="wd-text-fields-username">Username:</label>
                <input id="wd-text-fields-username" placeholder="jdoe"></input>
                <br/>
                <label htmlFor="wd-text-fields-password">Password:</label>
                <input type="password" id="wd-text-fields-password" value="123@#$asd"></input>
                <br/>
                <label htmlFor="wd-text-fields-first-name">First Name:</label>
                <input type="text" id="wd-text-fields-first-name" title="John"></input>
                <br/>
                <label htmlFor="wd-text-fields-last-name">Last Name:</label>
                <input type="text" id="wd-text-fields-last-name" placeholder="Doe" value="Wonderland" title="The last name"/>
            </form>
           
            <h5>Text boxes</h5>
            <label>Biography:</label>
            <br/>
            <textarea id="wd-textarea" cols={30} rows={10}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros mauris,
                accumsan eget nibh id, ornare placerat arcu. Quisque eu consequat leo,
                quis fermentum turpis. Integer at urna vulputate, ultrices odio a, finibus
                lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Donec placerat rhoncus lacus vel pretium. Duis
                dignissim ullamcorper ullamcorper. Nulla eget eleifend lorem. Donec
                porta nulla non nisi porta varius.
            </textarea>
           
            <h5 id="wd-buttons">Button</h5>
            <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">Hello World!</button>
           
            <h5>File upload</h5>
            <input id="wp-upload" type="file"/>
           
            <h5 id="wd-radio-buttons">Radio buttons</h5>
            <label>Favorite movie genre:</label>
            <br/>
            <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
            <label htmlFor="wd-radio-comedy">Comedy</label>
            <br/>
            <input type="radio" name="radio-genre" id="wd-radio-drama"/>
            <label htmlFor="wd-radio-drama">Drama</label>
            <br/>
            <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
            <label htmlFor="wd-radio-scifi">Science Fiction</label>
            <br/>
            <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
            <label htmlFor="wd-radio-fantasy">Fantasy</label>
           
            <h5 id="wd-checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label>
            <br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
            <label htmlFor="wd-chkbox-comedy">Comedy</label>
            <br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
            <label htmlFor="wd-chkbox-drama">Drama</label>
            <br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
            <br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>


            <h4 id="wd-dropdowns">Dropdowns</h4>
            <h5>Select one</h5>
            <label htmlFor="wd-select-one-genre">Favorite movie genre:</label>
            <br/>
            <select id="wd-select-one-genre">
                <option value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option selected value="SCIFI">Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>
            <h5>Select many</h5>
            <label htmlFor="wd-select-many-genre">Favorite movie genres:</label>
            <br/>
            <select id="wd-select-many-genre" multiple>
                <option selected value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option selected value="SCIFI">Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>


            <h4>Other HTML field types</h4>
            <label htmlFor="wd-text-fields-email">Email:</label>
            <input type="email" placeholder="jdoe@somewhere.com" id="wd-text-fields-email"></input>
            <br/>
            <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
            <input type="number" id="wd-text-fields-salary-start" placeholder="1000" value="100000"></input>
            <br/>
            <label htmlFor="wd-text-fields-rating">Rating:</label>
            <input type="range" id="wd-text-fields-rating" placeholder="Doe" max="5" defaultValue="4"/>
            <br/>
            <label htmlFor="wd-text-fields-dob">Date of birth:</label>
            <input type="date" id="wd-text-fields-dob" value="2000-01-21"></input>
            <br/>


            <h4>Anchor tag</h4>
            Please <a id="wd-lipsum" href="https://www.lipsum.com">click here</a> to get dummy text.
            <br/>
            Please <a id="wd-github" href="https://github.com/Soazul/kanbas-react-web-app"> click here</a> for my GitHub repository.
            <br/>
        </div>
    </div>
    );
}
