import { Migration } from '@mikro-orm/migrations';

export class Migration20241105015118 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "quote" ("id" text not null, "content" text not null, "details" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "quote_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "quote" cascade;');
  }

}
