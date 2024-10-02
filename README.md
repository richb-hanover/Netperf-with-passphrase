To create a website with a Markdown-composed homepage that displays text and a random two-word passphrase based on the current date, you can use a static site generator like Jekyll or Hugo with a simple custom script to generate the passphrase.

Here's how you can do it with Jekyll as an example:

### Steps:

1. **Set Up Jekyll:**
   - Install Jekyll:
     ```bash
     gem install jekyll bundler
     ```
   - Create a new Jekyll site:
     ```bash
     jekyll new my-site
     cd my-site
     ```

2. **Modify the Homepage to Use Markdown:**
   In Jekyll, you can write your homepage in Markdown by editing `index.md`.

   - Open `index.md` and modify the content as needed:
     ```markdown
     ---
     layout: default
     title: Home
     ---

     # Welcome to My Website
     This is some custom text. Below is a unique passphrase generated based on the current date:
     
     ```
     Passphrase: {{ site.data.passphrase }}
     ```
   ```

3. **Create the Passphrase Generation Script:**
   You'll need a script to generate the passphrase based on the current date. You can use Ruby for this since Jekyll is a Ruby-based system. The following script uses a list of words to create a passphrase:

   - Create a new file in the `_plugins` directory (create the directory if it doesn’t exist):
     `_plugins/passphrase_generator.rb`

     ```ruby
     module Jekyll
       class PassphraseGenerator < Generator
         def generate(site)
           words = %w[apple banana cherry dog elephant fox giraffe hat igloo jelly kite lemon]
           date_seed = Date.today.strftime("%Y%m%d").to_i
           srand(date_seed)

           passphrase = "#{words.sample}-#{words.sample}"
           site.data['passphrase'] = passphrase
         end
       end
     end
     ```

   This script will generate a passphrase each day based on the current date.

4. **Build and Serve Your Site:**
   Run the following command to serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

   You can now view the site at `http://localhost:4000`. Each day, the passphrase will change based on the date.

5. **Deploy the Site:**
   You can deploy the site to GitHub Pages or any other hosting service that supports static sites.

This setup allows you to write your homepage content in Markdown while dynamically generating a passphrase based on the current date each day.