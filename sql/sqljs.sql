SELECT ID, post_type, post_title, post_content, post_excerpt, post_status
FROM `wordpress`.`wp_posts`
WHERE post_type = 'product' AND post_status = 'publish';


SELECT ID, post_title
FROM `wordpress`.`wp_posts`
WHERE post_type = 'product' AND post_status = 'publish' AND post_title LIKE '%Abeba%';
