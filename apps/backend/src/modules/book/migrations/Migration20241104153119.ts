import { Migration } from '@mikro-orm/migrations'

export class Migration20241104153119 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table if not exists "book" ("id" text not null, "audioVersionUrl" text null, "dimensions" text null, "ebookVersionEbook" text null, "isbn" text null, "pagesCount" integer null, "publishDate" numeric null, "publisher" text null, "raw_publishDate" jsonb null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "book_pkey" primary key ("id"));',
    )
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "book" cascade;')
  }
}
