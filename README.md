# Demo Preline on Ruby on Rails 8.0

This is to demonstrate a Preline bug

## Instructions to run on CodeSandbox

1. Copy the repository
2. Run the setup tasks
3. Run in Tasks
   - **Prepare database**
   - **build js and css** OR \**watch:css\* and*watch:js\*\*
   - **Run rails server**
4. Open preview 3000 externally

5. Click on the sidebar toggle button
6. The sidebar works normally
7. Click on any link, they are all pointing to `"/"`
8. Turbo will replace the DOM with the new page
9. Click on the sidebar toggle button
10. The sidebar does not work anymore

Many issues point to adding this, see for example https://github.com/htmlstreamofficial/preline/issues/616#issuecomment-2753457080
I know that is the solution, but it still does not<https://github.com/htmlstreamofficial/preline/issues/616#issuecomment-2753457080>

I think I found the issue, but not the root cause:


- the `"hidden"` class is not appended anymore to the sidebar class list.
- The only place where it is added is here <https://github.com/htmlstreamofficial/preline/blob/b44656ea345e7ebd1cdad8213234a7382b276aa6/src/plugins/overlay/index.ts#L576>

I hope this helps. Thank you for this great project! :heart: <3
