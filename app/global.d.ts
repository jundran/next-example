import { Database as DB } from "@/lib/database.types"

declare global {
  type Database = DB
	type Profile = DB["public"]["Tables"]["profiles"]["Row"]
	type Article = DB["public"]["Tables"]["articles"]["Row"]
	type ArticleWithAuthor = Article & {
    author: {
			id: Profile.id
			full_name: Profile.full_name
		}
  }
}
